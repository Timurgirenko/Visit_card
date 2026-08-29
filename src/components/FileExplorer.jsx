import { useState } from 'react'
import '../styles/fileExplorer.css'
import { IconClock } from './Icon.jsx'
import { FILES } from '../data/files.js'
import CommitsModal from './CommitsModal.jsx'

export default function FileExplorer({ onNavigate }) {
  const [commitsOpen, setCommitsOpen] = useState(false)

  return (
    <div className="box" style={{ marginBottom: 20 }}>
      <div className="commit-bar">
        <div className="avatar-mini">ТГ</div>
        <span className="who">Timurgirenko</span>
        <span className="msg">Обновил профиль — открыт к предложениям</span>
        <div className="right">
          <button type="button" className="commit-count" onClick={() => setCommitsOpen(true)}>
            <IconClock size={13} /> 2 Commits
          </button>
        </div>
      </div>

      {FILES.map((file) => {
        const Icon = file.icon
        return (
          <a
            key={file.name}
            className="file-row"
            href="#"
            onClick={(e) => {
              e.preventDefault()
              onNavigate(file.tab)
            }}
          >
            <span className="icon"><Icon size={14} /></span>
            <span className="name">{file.name}</span>
            <span className="desc">{file.desc}</span>
            <span className="time">{file.time}</span>
          </a>
        )
      })}

      {commitsOpen && <CommitsModal onClose={() => setCommitsOpen(false)} />}
    </div>
  )
}
