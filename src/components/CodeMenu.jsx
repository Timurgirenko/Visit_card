import { useState } from 'react'
import {
  IconCopy,
  IconHelpCircle,
  IconSparkle,
  IconDesktop,
  IconDownload,
  IconCloud,
  IconPlus,
  IconMoreHorizontal,
} from './Icon.jsx'

const CLONE_URLS = {
  https: 'https://github.com/timurgirenko/timurgirenko.git',
  ssh: 'git@github.com:timurgirenko/timurgirenko.git',
  cli: 'gh repo clone timurgirenko/timurgirenko',
}

export default function CodeMenu() {
  const [tab, setTab] = useState('local') // 'local' | 'codespaces'
  const [protocol, setProtocol] = useState('ssh')
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CLONE_URLS[protocol])
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <div className="code-menu">
      <div className="code-menu-tabs">
        <button
          type="button"
          className={tab === 'local' ? 'active' : ''}
          onClick={() => setTab('local')}
        >
          Local
        </button>
        <button
          type="button"
          className={tab === 'codespaces' ? 'active' : ''}
          onClick={() => setTab('codespaces')}
        >
          Codespaces
        </button>
      </div>

      {tab === 'local' && (
        <div className="code-menu-panel">
          <div className="code-menu-row">
            <span className="code-menu-title">
              <IconDesktop size={14} /> Clone
            </span>
            <IconHelpCircle size={15} className="code-menu-help" />
          </div>

          <div className="protocol-tabs">
            {['https', 'ssh', 'cli'].map((key) => (
              <button
                key={key}
                type="button"
                className={protocol === key ? 'active' : ''}
                onClick={() => setProtocol(key)}
              >
                {key === 'cli' ? 'GitHub CLI' : key.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="clone-url-row">
            <code>{CLONE_URLS[protocol]}</code>
            <button type="button" className="copy-btn" onClick={handleCopy} title="Copy">
              <IconCopy size={14} />
            </button>
          </div>
          {copied && <div className="copied-hint">Скопировано</div>}

          <p className="code-menu-note">Use a password-protected SSH key.</p>

          <div className="code-menu-divider" />

          <button type="button" className="code-menu-link">
            <IconSparkle size={15} /> Open in GitHub Copilot app
          </button>
          <button type="button" className="code-menu-link">
            <IconDesktop size={15} /> Open with GitHub Desktop
          </button>
          <button type="button" className="code-menu-link">
            <IconDownload size={15} /> Download ZIP
          </button>
        </div>
      )}

      {tab === 'codespaces' && (
        <div className="code-menu-panel">
          <div className="code-menu-row">
            <div>
              <div className="code-menu-title bold"><IconCloud size={14} /> Codespaces</div>
              <div className="code-menu-subtitle">Your workspaces in the cloud</div>
            </div>
            <div className="code-menu-row-icons">
              <IconPlus size={15} />
              <IconMoreHorizontal size={15} />
            </div>
          </div>

          <div className="code-menu-divider" />

          <div className="codespaces-empty">
            <div className="codespaces-empty-title">No codespaces</div>
            <div className="codespaces-empty-desc">
              You don't have any codespaces with this repository checked out
            </div>
            <button type="button" className="code-menu-cta">Create codespace on main</button>
            <a href="#" className="code-menu-more-link" onClick={(e) => e.preventDefault()}>
              Learn more about codespaces…
            </a>
          </div>

          <div className="code-menu-divider" />

          <p className="code-menu-footer">
            Codespace usage for this repository is paid for by <b>Timurgirenko</b>.
          </p>
        </div>
      )}
    </div>
  )
}
