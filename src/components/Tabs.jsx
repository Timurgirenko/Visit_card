import '../styles/tabs.css'

const TABS = [
  { key: 'code', label: 'Code', icon: <span className="dot" /> },
  { key: 'about', label: '👤 About' },
  { key: 'experience', label: '🧭 Experience' },
  { key: 'projects', label: '📦 Projects' },
  { key: 'contact', label: '✉️ Contact' },
]

export default function Tabs({ activeTab, onChange }) {
  const handleClick = (e, key) => {
    e.preventDefault()
    onChange(key)
  }

  return (
    <div className="tabs">
      <div className="wrap">
        {TABS.map((tab) => (
          <a
            key={tab.key}
            href="#"
            className={activeTab === tab.key ? 'active' : ''}
            onClick={(e) => handleClick(e, tab.key)}
          >
            {tab.icon} {tab.label}
          </a>
        ))}
      </div>
    </div>
  )
}
