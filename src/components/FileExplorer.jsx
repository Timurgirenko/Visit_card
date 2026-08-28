import '../styles/fileExplorer.css'
import { IconFileText, IconFolder } from './Icon.jsx'

const FILES = [
  { icon: IconFileText, name: 'about.md', desc: 'Кто я и чем занимаюсь', time: 'сейчас', tab: 'about' },
  { icon: IconFileText, name: 'experience.md', desc: 'Опыт и учёба', time: 'на этой неделе', tab: 'experience' },
  { icon: IconFolder, name: 'projects/', desc: 'Закреплённые репозитории', time: 'на этой неделе', tab: 'projects' },
  { icon: IconFileText, name: 'skills.json', desc: 'Стек: Vue, Nuxt, JS/TS', time: 'на этой неделе', tab: 'about' },
  { icon: IconFileText, name: 'contact.txt', desc: 'Telegram, email, резюме', time: 'на этой неделе', tab: 'contact' },
]

export default function FileExplorer({ onNavigate }) {
  return (
    <div className="box" style={{ marginBottom: 20 }}>
      <div className="commit-bar">
        <div className="avatar-mini">ТГ</div>
        <span className="who">Timurgirenko</span>
        <span className="msg">Обновил профиль — открыт к предложениям</span>
        <div className="right">
          <span>сегодня</span>
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
    </div>
  )
}
