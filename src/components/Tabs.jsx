import '../styles/tabs.css'
import { IconUser, IconCompass, IconBox, IconMail } from './Icon.jsx'

const TABS = [
  { key: 'code', label: 'Code', icon: <span className="dot" /> },
  { key: 'about', label: 'About', icon: <IconUser size={14} /> },
  { key: 'experience', label: 'Experience', icon: <IconCompass size={14} /> },
  { key: 'projects', label: 'Projects', icon: <IconBox size={14} /> },
  { key: 'contact', label: 'Contact', icon: <IconMail size={14} /> },
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
