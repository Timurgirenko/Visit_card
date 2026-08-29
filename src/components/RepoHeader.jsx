import { useEffect, useRef, useState } from 'react'
import '../styles/repoHeader.css'
import { IconFolder, IconPin, IconEye, IconGitFork, IconStar, IconChevronDown } from './Icon.jsx'
import WatchMenu from './WatchMenu.jsx'

export default function RepoHeader() {
  const [pinned, setPinned] = useState(false)
  const [watchOpen, setWatchOpen] = useState(false)
  const [watchSelected, setWatchSelected] = useState('participating')
  const watchRef = useRef(null)

  useEffect(() => {
    function handleOutside(e) {
      if (watchRef.current && !watchRef.current.contains(e.target)) {
        setWatchOpen(false)
      }
    }
    function handleEscape(e) {
      if (e.key === 'Escape') setWatchOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

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

            <div className="watch-dropdown-wrap" ref={watchRef}>
              <button
                type="button"
                className="btn tb-btn-clickable"
                onClick={() => setWatchOpen((v) => !v)}
                aria-expanded={watchOpen}
              >
                <IconEye size={13} /> Watch <span className="count">0</span>
                <IconChevronDown size={12} />
              </button>

              {watchOpen && (
                <div className="watch-menu-wrap">
                  <WatchMenu
                    selected={watchSelected}
                    onSelect={(key) => {
                      setWatchSelected(key)
                      setWatchOpen(false)
                    }}
                  />
                </div>
              )}
            </div>

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
