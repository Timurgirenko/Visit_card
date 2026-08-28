import '../styles/sidebar.css'

export default function Sidebar({ activeTab, onNavigate }) {
  const showAbout = ['code', 'about'].includes(activeTab)
  const showLanguages = ['code', 'about', 'projects'].includes(activeTab)

  return (
    <div>
      <div className={`side-box panel ${showAbout ? 'show' : ''}`}>
        <h3>About</h3>
        <p>Frontend-разработчик (Vue/Nuxt) из Воронежа. Студент ВГУ. Открыт к найму и фрилансу.</p>
        <ul className="side-list" style={{ marginTop: 12 }}>
          <li><span className="ic">📍</span> Воронеж, Россия</li>
          <li><span className="ic">🎓</span> ВГУ, матфакультет</li>
          <li><span className="ic">🟢</span> Доступен для проектов</li>
        </ul>
      </div>

      <div className={`side-box panel ${showLanguages ? 'show' : ''}`}>
        <h3>Languages</h3>
        <div className="lang-bar">
          <div style={{ width: '45%', background: 'var(--vue)' }} />
          <div style={{ width: '25%', background: 'var(--js)' }} />
          <div style={{ width: '15%', background: 'var(--ts)' }} />
          <div style={{ width: '10%', background: 'var(--css)' }} />
          <div style={{ width: '5%', background: 'var(--html)' }} />
        </div>
        <div className="lang-legend">
          <span><i style={{ background: 'var(--vue)' }} />Vue 45%</span>
          <span><i style={{ background: 'var(--js)' }} />JS 25%</span>
          <span><i style={{ background: 'var(--ts)' }} />TS 15%</span>
          <span><i style={{ background: 'var(--css)' }} />CSS 10%</span>
          <span><i style={{ background: 'var(--html)' }} />HTML 5%</span>
        </div>
      </div>

      <div className="side-box">
        <h3>Sponsor / Связаться</h3>
        <a
          className="sponsor-btn"
          href="#"
          onClick={(e) => {
            e.preventDefault()
            onNavigate('contact')
          }}
        >
          💌 Написать Тимуру
        </a>
      </div>
    </div>
  )
}
