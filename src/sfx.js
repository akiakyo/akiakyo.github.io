// tiny synthesized sound effects (web audio, no audio files).
// browsers only allow audio after the visitor interacts, so nothing plays before the first click/tap.

const KEY = 'aquio-sfx';
let ctx = null;
let master = null;
let noise = null;
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

  // one second of white noise, reused by every paper/pencil sound
  noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
  const data = noise.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
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

function noiseBurst({ freq, q = 1, peak, attack = 0.003, release, sweepTo }) {
  const t = ctx.currentTime;
  const src = ctx.createBufferSource();
  src.buffer = noise;
  src.playbackRate.value = 0.8 + Math.random() * 0.4;
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(freq, t);
  if (sweepTo) filter.frequency.exponentialRampToValueAtTime(sweepTo, t + attack + release);
  filter.Q.value = q;
  const gain = ctx.createGain();
  envelope(gain, t, peak, attack, release);
  src.connect(filter).connect(gain).connect(master);
  src.start(t, Math.random() * 0.5);
  src.stop(t + attack + release + 0.05);
}

function tone({ from, to = from, peak, release, type = 'sine', at = 0 }) {
  const t = ctx.currentTime + at;
  const osc = ctx.createOscillator();
  osc.type = type;
  osc.frequency.setValueAtTime(from, t);
  osc.frequency.exponentialRampToValueAtTime(to, t + release);
  const gain = ctx.createGain();
  envelope(gain, t, peak, 0.005, release);
  osc.connect(gain).connect(master);
  osc.start(t);
  osc.stop(t + release + 0.05);
}

let lastHover = 0;

export const sfx = {
  // pencil tap on a click
  tap() {
    if (!ready()) return;
    noiseBurst({ freq: 2400, q: 1.2, peak: 0.35, release: 0.05 });
    tone({ from: 220, to: 120, peak: 0.12, release: 0.06 });
  },

  // soft paper tick on hover, throttled so sweeping across links isn't noisy
  hover() {
    if (!ready()) return;
    const now = performance.now();
    if (now - lastHover < 70) return;
    lastHover = now;
    noiseBurst({ freq: 4200, q: 2, peak: 0.06, release: 0.025 });
  },

  // page flip / swoosh for galleries
  flip() {
    if (!ready()) return;
    noiseBurst({ freq: 700, q: 0.8, peak: 0.25, attack: 0.04, release: 0.2, sweepTo: 3200 });
  },

  // pencil scratching while text writes itself
  scratch(duration = 1) {
    if (!ready()) return;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = noise;
    src.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 3200;
    filter.Q.value = 0.9;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    // little bursts, like letters being written
    for (let s = 0; s < duration; s += 0.07 + Math.random() * 0.06) {
      gain.gain.linearRampToValueAtTime(0.03 + Math.random() * 0.05, t + s + 0.02);
      gain.gain.linearRampToValueAtTime(0.005, t + s + 0.06);
    }
    gain.gain.linearRampToValueAtTime(0.0001, t + duration + 0.05);
    src.connect(filter).connect(gain).connect(master);
    src.start(t);
    src.stop(t + duration + 0.1);
  },

  // theme switch: rising for light, falling for dark
  toggle(toDark) {
    if (!ready()) return;
    const [a, b] = toDark ? [880, 587] : [587, 880];
    tone({ from: a, peak: 0.12, release: 0.12, type: 'triangle' });
    tone({ from: b, peak: 0.12, release: 0.18, type: 'triangle', at: 0.08 });
  },

  // copied to clipboard
  pop() {
    if (!ready()) return;
    tone({ from: 520, to: 1250, peak: 0.16, release: 0.12 });
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
