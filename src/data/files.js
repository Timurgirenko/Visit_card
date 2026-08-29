import { IconFileText, IconFolder } from '../components/Icon.jsx'

// Shared file list used by both the file explorer and the "Go to file" search.
export const FILES = [
  { icon: IconFileText, name: 'about.md', desc: 'Кто я и чем занимаюсь', time: 'сейчас', tab: 'about' },
  { icon: IconFileText, name: 'experience.md', desc: 'Опыт и учёба', time: 'на этой неделе', tab: 'experience' },
  { icon: IconFolder, name: 'projects/', desc: 'Закреплённые репозитории', time: 'на этой неделе', tab: 'projects' },
  { icon: IconFileText, name: 'skills.json', desc: 'Стек: Vue, Nuxt, JS/TS', time: 'на этой неделе', tab: 'about' },
  { icon: IconFileText, name: 'contact.txt', desc: 'Telegram, email, резюме', time: 'на этой неделе', tab: 'contact' },
]
