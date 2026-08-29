import { useEffect, useState } from 'react'
import '../styles/commitsModal.css'
import {
  IconX,
  IconGitFork,
  IconUsers,
  IconCalendar,
  IconChevronDown,
  IconGitCommit,
  IconCopy,
  IconCode,
} from './Icon.jsx'

const COMMITS = [
  {
    date: 'Недавно',
    hash: 'f4a9c12',
    title: 'Начал работать',
    when: 'начал работать frontend-разработчиком',
  },
  {
    date: 'Раньше',
    hash: '17046aa',
    title: 'Начал учиться',
    when: 'поступил на матфак ВГУ',
  },
]

function CommitCard({ commit }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(commit.hash)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <div className="commit-card">
      <div className="commit-card-main">
        <div className="commit-card-title">{commit.title}</div>
        <div className="commit-card-meta">
          <span className="avatar-mini">ТГ</span>
          <span className="commit-author">Timurgirenko committed</span>
          <span className="commit-when">{commit.when}</span>
        </div>
      </div>
      <div className="commit-card-right">
        <code className="commit-hash">{commit.hash}</code>
        <button type="button" className="commit-icon-btn" onClick={handleCopy} title="Copy">
          <IconCopy size={14} />
        </button>
        <span className="commit-icon-btn static">
          <IconCode size={14} />
        </span>
        {copied && <span className="commit-copied">Скопировано</span>}
      </div>
    </div>
  )
}

export default function CommitsModal({ onClose }) {
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div className="commits-overlay" onClick={onClose}>
      <div className="commits-panel" onClick={(e) => e.stopPropagation()}>
        <div className="commits-header">
          <h2>Commits</h2>
          <button type="button" className="commits-close" onClick={onClose} aria-label="Закрыть">
            <IconX size={18} />
          </button>
        </div>

        <div className="commits-toolbar">
          <span className="cm-btn">
            <IconGitFork size={13} /> main <IconChevronDown size={12} />
          </span>
          <div className="cm-toolbar-right">
            <span className="cm-btn">
              <IconUsers size={13} /> All users <IconChevronDown size={12} />
            </span>
            <span className="cm-btn">
              <IconCalendar size={13} /> All time <IconChevronDown size={12} />
            </span>
          </div>
        </div>

        <div className="commits-body">
          {COMMITS.map((commit) => (
            <div className="commit-group" key={commit.hash}>
              <div className="commit-group-header">
                <IconGitCommit size={14} />
                <span>Commits — {commit.date.toLowerCase()}</span>
              </div>
              <div className="commit-group-line">
                <CommitCard commit={commit} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
