import { IconCheck, IconChevronRight } from './Icon.jsx'

const OPTIONS = [
  {
    key: 'participating',
    title: 'Participating and @mentions',
    desc: 'Only receive notifications from this repository when participating or @mentioned.',
  },
  {
    key: 'all',
    title: 'All Activity',
    desc: 'Notified of all notifications on this repository.',
  },
  {
    key: 'ignore',
    title: 'Ignore',
    desc: 'Never be notified.',
  },
  {
    key: 'custom',
    title: 'Custom',
    desc: 'Select events you want to be notified of in addition to participating and @mentions.',
    arrow: true,
  },
]

export default function WatchMenu({ selected, onSelect }) {
  return (
    <div className="watch-menu">
      {OPTIONS.map((opt) => (
        <button
          key={opt.key}
          type="button"
          className="watch-item"
          onClick={() => onSelect(opt.key)}
        >
          <span className="watch-check">
            {selected === opt.key && <IconCheck size={14} />}
          </span>
          <span className="watch-text">
            <span className="watch-title">{opt.title}</span>
            <span className="watch-desc">{opt.desc}</span>
          </span>
          {opt.arrow && <IconChevronRight size={15} className="watch-arrow" />}
        </button>
      ))}
    </div>
  )
}
