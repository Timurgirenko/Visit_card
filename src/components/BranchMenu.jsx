import { useState } from 'react'
import { IconX, IconSearch, IconCheck } from './Icon.jsx'

export default function BranchMenu({ onClose }) {
  const [tab, setTab] = useState('branches') // 'branches' | 'tags'
  const [query, setQuery] = useState('')

  return (
    <div className="branch-menu">
      <div className="branch-menu-header">
        <span>Switch branches/tags</span>
        <button type="button" className="branch-menu-close" onClick={onClose} aria-label="Закрыть">
          <IconX size={14} />
        </button>
      </div>

      <div className="branch-menu-search">
        <IconSearch size={13} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={tab === 'branches' ? 'Find or create a branch...' : 'Search or create a new tag'}
        />
      </div>

      <div className="branch-menu-tabs">
        <button
          type="button"
          className={tab === 'branches' ? 'active' : ''}
          onClick={() => setTab('branches')}
        >
          Branches
        </button>
        <button
          type="button"
          className={tab === 'tags' ? 'active' : ''}
          onClick={() => setTab('tags')}
        >
          Tags
        </button>
      </div>

      <div className="branch-menu-body">
        {tab === 'branches' ? (
          <div className="branch-item">
            <span className="branch-check"><IconCheck size={14} /></span>
            <span className="branch-name">main</span>
            <span className="default-badge">default</span>
          </div>
        ) : (
          <div className="branch-menu-empty">Nothing to show</div>
        )}
      </div>

      <div className="branch-menu-footer">
        <a href="#" onClick={(e) => e.preventDefault()}>
          {tab === 'branches' ? 'View all branches' : 'View all tags'}
        </a>
      </div>
    </div>
  )
}
