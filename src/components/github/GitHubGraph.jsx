import { useEffect, useState } from 'react';
import { profile } from '../../data';
import Section from '../layout/Section';
import './styles/github.css';

// github has no public endpoint for the contribution calendar, so this reads a
// free mirror of it in the visitor's browser. if it fails, only the link shows.
const API = `https://github-contributions-api.jogruber.de/v4/${profile.handle}?y=last`;

const CELL = 12;
const RADIUS = [1.2, 2.4, 3.4, 4.3, 5.2]; // dot size per activity level 0–4

// days → columns of weeks, each starting on sunday like github's graph
function toWeeks(days) {
  const weeks = [];
  let week = new Array(new Date(days[0].date).getUTCDay()).fill(null);
  days.forEach((d) => {
    week.push(d);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });
  if (week.length) weeks.push(week);
  return weeks;
}

export default function GitHubGraph() {
  const [state, setState] = useState({ status: 'loading' });

  useEffect(() => {
    let alive = true;
    fetch(API)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((json) => {
        if (!alive || !json.contributions?.length) throw new Error('empty');
        setState({ status: 'ready', weeks: toWeeks(json.contributions), total: json.total?.lastYear ?? 0 });
      })
      .catch(() => alive && setState({ status: 'error' }));
    return () => {
      alive = false;
    };
  }, []);

  // while loading, draw an empty year of faint dots so the layout doesn't jump
  const weeks = state.weeks || Array.from({ length: 53 }, () => new Array(7).fill({ level: 0 }));

  return (
    <Section id="github" title="github" page={false} link={{ href: profile.github, label: `@${profile.handle}` }}>
      {state.status !== 'error' && (
        <div className="gh-graph">
          <svg
            viewBox={`0 0 ${weeks.length * CELL} ${7 * CELL}`}
            role="img"
            aria-label={state.status === 'ready' ? `${state.total} GitHub contributions in the last year` : 'Loading GitHub contributions'}
            className={state.status === 'loading' ? 'loading' : undefined}
          >
            {weeks.map((week, x) =>
              week.map((day, y) =>
                day ? (
                  <circle
                    key={`${x}-${y}`}
                    cx={x * CELL + CELL / 2}
                    cy={y * CELL + CELL / 2}
                    r={RADIUS[day.level] ?? RADIUS[0]}
                    className={day.level ? 'on' : 'off'}
                  >
                    {day.date && <title>{`${day.count} on ${day.date}`}</title>}
                  </circle>
                ) : null
              )
            )}
          </svg>
          <p className="gh-total">
            {state.status === 'ready' ? `${state.total.toLocaleString()} contributions in the last year` : 'Loading contributions…'}
          </p>
        </div>
      )}
      {state.status === 'error' && (
        <p className="gh-total">
          See my latest work on{' '}
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>
      )}
    </Section>
  );
}
