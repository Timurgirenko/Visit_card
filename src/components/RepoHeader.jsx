import { useState } from 'react'
import '../styles/repoHeader.css'
import { IconFolder, IconPin, IconEye, IconGitFork, IconStar } from './Icon.jsx'

export default function RepoHeader() {
  const [pinned, setPinned] = useState(false)

  return (
    <div className="repo-header">
      <div className="wrap">
        <div className="repo-title-row">
          <span className="repo-avatar">
            <IconFolder size={15} />
          </span>
          <h1>
            timurgirenko <span className="badge">Public</span>
          </h1>

          <div className="repo-actions">
            <button
              type="button"
              className="btn tb-btn-clickable"
              onClick={() => setPinned((v) => !v)}
              aria-pressed={pinned}
            >
              <IconPin
                size={13}
                className={pinned ? 'pin-active' : 'pin-icon'}
                fill={pinned ? 'currentColor' : 'none'}
              /> Pin
            </button>
            <span className="btn">
              <IconEye size={13} /> Watch <span className="count">0</span>
            </span>
            <span className="btn">
              <IconGitFork size={13} /> Fork <span className="count">0</span>
            </span>
            <span className="btn">
              <IconStar size={13} /> Star <span className="count">0</span>
            </span>
          </div>
        </div>

        <span className="open-badge">
          <IconStar size={13} /> Открыт для предложений
        </span>
      </div>
    </div>
  )
}
