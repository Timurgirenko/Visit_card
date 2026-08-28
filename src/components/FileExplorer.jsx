import '../styles/fileExplorer.css'

const FILES = [
  { icon: '📄', name: 'about.md', desc: 'Кто я и чем занимаюсь', time: 'сейчас', tab: 'about' },
  { icon: '📄', name: 'experience.md', desc: 'Опыт и учёба', time: 'на этой неделе', tab: 'experience' },
  { icon: '📁', name: 'projects/', desc: 'Закреплённые репозитории', time: 'на этой неделе', tab: 'projects' },
  { icon: '📄', name: 'skills.json', desc: 'Стек: Vue, Nuxt, JS/TS', time: 'на этой неделе', tab: 'about' },
  { icon: '📄', name: 'contact.txt', desc: 'Telegram, email, резюме', time: 'на этой неделе', tab: 'contact' },
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

      {FILES.map((file) => (
        <a
          key={file.name}
          className="file-row"
          href="#"
          onClick={(e) => {
            e.preventDefault()
            onNavigate(file.tab)
          }}
        >
          <span className="icon">{file.icon}</span>
          <span className="name">{file.name}</span>
          <span className="desc">{file.desc}</span>
          <span className="time">{file.time}</span>
        </a>
      ))}
    </div>
  )
}
