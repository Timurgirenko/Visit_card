import '../styles/readme.css'
import ContributionGraph from './ContributionGraph.jsx'
import {
  IconBook,
  IconFileText,
  IconFolder,
  IconUser,
  IconCode,
  IconCompass,
  IconBox,
  IconMail,
  IconMessageCircle,
  IconActivity,
  IconStar,
  IconGitFork,
} from './Icon.jsx'

const FILENAMES = {
  code: { icon: IconBook, label: 'README.md' },
  about: { icon: IconFileText, label: 'about.md' },
  experience: { icon: IconFileText, label: 'experience.md' },
  projects: { icon: IconFolder, label: 'projects/' },
  contact: { icon: IconFileText, label: 'contact.txt' },
}

// which tabs each panel is visible on
const visibleOn = (activeTab, tabs) => tabs.includes(activeTab)

export default function Readme({ activeTab }) {
  const file = FILENAMES[activeTab] || FILENAMES.code
  const FileIcon = file.icon

  return (
    <div className="box" id="readme">
      <div className="readme-header">
        <FileIcon size={14} /> {file.label}
      </div>
      <div className="readme-body">
        <div className={`panel ${visibleOn(activeTab, ['code']) ? 'show' : ''}`}>
          <h1>Тимур Гиренко</h1>
          <div className="readme-role">
            Frontend-разработчик · <span>Vue / Nuxt</span> · Воронеж
          </div>
          <div className="term">
            <span className="p">$</span> whoami
            <br />
            Тимур Гиренко — frontend-разработчик
            <br />
            <span className="p">$</span> cat status.txt
            <br />
            <span className="c">// 1–3 года опыта, стек Vue/Nuxt</span>
            <br />
            Ищу работу: найм или фриланс <span className="cursor" />
          </div>
        </div>

        <div className={`panel ${visibleOn(activeTab, ['code', 'about']) ? 'show' : ''}`}>
          <h2><IconUser size={16} /> О себе</h2>
          <ul>
            <li>Frontend-разработчик, стек — Vue / Nuxt</li>
            <li>Учусь на математическом факультете ВГУ</li>
            <li>Живу в Воронеже, к переезду не готов</li>
            <li>Рассматриваю и найм, и фриланс-проекты</li>
          </ul>

          <h2><IconCode size={16} /> Стек</h2>
          <div className="badges">
            <span className="lang-pill"><i style={{ background: 'var(--vue)' }} /> Vue.js</span>
            <span className="lang-pill"><i style={{ background: 'var(--vue)' }} /> Nuxt</span>
            <span className="lang-pill"><i style={{ background: 'var(--js)' }} /> JavaScript</span>
            <span className="lang-pill"><i style={{ background: 'var(--ts)' }} /> TypeScript</span>
            <span className="lang-pill"><i style={{ background: 'var(--css)' }} /> CSS</span>
            <span className="lang-pill"><i style={{ background: 'var(--html)' }} /> HTML</span>
          </div>
        </div>

        <div className={`panel ${visibleOn(activeTab, ['code', 'experience']) ? 'show' : ''}`}>
          <h2><IconCompass size={16} /> Опыт</h2>
          <div className="timeline">
            <div className="item">
              <b>Frontend-разработчик (Vue/Nuxt)</b>
              <span className="when">1–3 года опыта</span>
              Разработка интерфейсов и небольших сайтов, включая интеграции с внешними API.
            </div>
            <div className="item">
              <b>ВГУ, математический факультет</b>
              <span className="when">учёба</span>
              Воронежский государственный университет.
            </div>
          </div>
        </div>

        <div className={`panel ${visibleOn(activeTab, ['code', 'projects']) ? 'show' : ''}`}>
          <h2><IconBox size={16} /> Закреплённые проекты</h2>
          <div className="repo-cards">
            <div className="repo-card">
              <span className="rname">pet_proj (Краля)</span>
              <div className="rdesc">
                Сайт на Vue 3 с автоматической выгрузкой товаров из МойСклад, серверная часть на Node.js/Express.
              </div>
              <div className="rmeta">
                <span className="lang"><i style={{ background: 'var(--vue)' }} /> Vue</span>
                <span><IconStar size={12} /> 0</span>
                <span><IconGitFork size={12} /> 0</span>
              </div>
            </div>
            <div className="repo-card">
              <span className="rname">clubcard-concept</span>
              <div className="rdesc">
                Прототип мобильного приложения клубной карты: QR-карта, баллы, история покупок.
              </div>
              <div className="rmeta">
                <span className="lang"><i style={{ background: '#61dafb' }} /> React</span>
                <span><IconStar size={12} /> 0</span>
                <span><IconGitFork size={12} /> 0</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`panel ${visibleOn(activeTab, ['code', 'contact']) ? 'show' : ''}`}>
          <h2><IconMail size={16} /> Контакты</h2>
          <p>Открыт к предложениям по найму и фрилансу.</p>
          <div className="contact-row">
            <span className="contact-btn"><IconMail size={14} /> your@email.com</span>
            <span className="contact-btn secondary"><IconMessageCircle size={14} /> Telegram</span>
            <span className="contact-btn secondary"><IconFileText size={14} /> Резюме (PDF)</span>
          </div>
        </div>

        <div className={`panel ${visibleOn(activeTab, ['code']) ? 'show' : ''}`}>
          <h2><IconActivity size={16} /> Активность</h2>
          <ContributionGraph />
        </div>
      </div>
    </div>
  )
}
