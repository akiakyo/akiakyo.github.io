// tiny synthesized chiptune sound effects (web audio, no audio files).
// browsers only allow audio after the visitor interacts, so nothing plays before the first click/tap.

const KEY = 'aquio-sfx';
let ctx = null;
let master = null;
let enabled = true;
const listeners = new Set();

try {
  enabled = localStorage.getItem(KEY) !== 'off';
} catch (e) {
  // storage blocked, default to on
}

function setup() {
  if (ctx) return ctx;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  ctx = new AC();
  master = ctx.createGain();
  master.gain.value = 0.6;
  master.connect(ctx.destination);
  return ctx;
}

// unlock audio on the first interaction
function unlock() {
  const c = setup();
  if (c && c.state === 'suspended') c.resume();
}
window.addEventListener('pointerdown', unlock, { once: true, capture: true });
window.addEventListener('keydown', unlock, { once: true, capture: true });

const ready = () => enabled && ctx && ctx.state === 'running';

function envelope(gainNode, t, peak, attack, release) {
  gainNode.gain.setValueAtTime(0.0001, t);
  gainNode.gain.exponentialRampToValueAtTime(peak, t + attack);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, t + attack + release);
}

// square waves are the sound of an old console's pulse channel
function tone({ from, to = from, peak, release, type = 'square', at = 0 }) {
  const t = ctx.currentTime + at;
  const osc = ctx.createOscillator();
  osc.type = type;
  osc.frequency.setValueAtTime(from, t);
  osc.frequency.exponentialRampToValueAtTime(to, t + release);
  const gain = ctx.createGain();
  envelope(gain, t, peak, 0.003, release);
  osc.connect(gain).connect(master);
  osc.start(t);
  osc.stop(t + release + 0.05);
}

let lastHover = 0;

export const sfx = {
  // menu select on a click
  tap() {
    if (!ready()) return;
    tone({ from: 660, peak: 0.07, release: 0.05 });
    tone({ from: 990, peak: 0.07, release: 0.07, at: 0.05 });
  },

  // soft cursor blip on hover, throttled so sweeping across links isn't noisy
  hover() {
    if (!ready()) return;
    const now = performance.now();
    if (now - lastHover < 70) return;
    lastHover = now;
    tone({ from: 1320, peak: 0.018, release: 0.025 });
  },

  // quick rising arpeggio for galleries
  flip() {
    if (!ready()) return;
    [523, 659, 784].forEach((from, i) => tone({ from, peak: 0.06, release: 0.05, at: i * 0.04 }));
  },

  // dialogue blips while text types itself
  typing(duration = 1) {
    if (!ready()) return;
    for (let s = 0; s < duration; s += 0.07 + Math.random() * 0.03) {
      tone({ from: 440 + Math.random() * 120, peak: 0.015, release: 0.02, at: s });
    }
  },

  // theme switch: rising for light, falling for dark
  toggle(toDark) {
    if (!ready()) return;
    const [a, b] = toDark ? [880, 587] : [587, 880];
    tone({ from: a, peak: 0.07, release: 0.1 });
    tone({ from: b, peak: 0.07, release: 0.16, at: 0.08 });
  },

  // copied to clipboard: the coin sound
  pop() {
    if (!ready()) return;
    tone({ from: 988, peak: 0.08, release: 0.07 });
    tone({ from: 1319, peak: 0.08, release: 0.28, at: 0.07 });
  },

  isEnabled: () => enabled,

  setEnabled(on) {
    enabled = on;
    try {
      localStorage.setItem(KEY, on ? 'on' : 'off');
    } catch (e) {
      // ignore
    }
    if (on) {
      unlock();
      sfx.tap();
    }
    listeners.forEach((fn) => fn(on));
  },

  subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },
};
