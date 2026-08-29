import { useEffect, useRef, useState } from 'react'
import '../styles/toolbar.css'
import {
  IconGitFork,
  IconTag,
  IconSearch,
  IconCode,
  IconChevronDown,
  IconPlus,
  IconUpload,
} from './Icon.jsx'
import { FILES } from '../data/files.js'
import CodeMenu from './CodeMenu.jsx'
import BranchMenu from './BranchMenu.jsx'

export default function Toolbar({ onNavigate }) {
  const [branchOpen, setBranchOpen] = useState(false)
  const [addFileOpen, setAddFileOpen] = useState(false)
  const [codeOpen, setCodeOpen] = useState(false)
  const [goToOpen, setGoToOpen] = useState(false)
  const [query, setQuery] = useState('')

  const branchRef = useRef(null)
  const addFileRef = useRef(null)
  const codeRef = useRef(null)
  const goToRef = useRef(null)

  useEffect(() => {
    function handleOutside(e) {
      if (branchRef.current && !branchRef.current.contains(e.target)) setBranchOpen(false)
      if (addFileRef.current && !addFileRef.current.contains(e.target)) setAddFileOpen(false)
      if (codeRef.current && !codeRef.current.contains(e.target)) setCodeOpen(false)
      if (goToRef.current && !goToRef.current.contains(e.target)) setGoToOpen(false)
    }
    function handleEscape(e) {
      if (e.key === 'Escape') {
        setBranchOpen(false)
        setAddFileOpen(false)
        setCodeOpen(false)
        setGoToOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const openOnly = (setter) => {
    setBranchOpen(false)
    setAddFileOpen(false)
    setCodeOpen(false)
    setGoToOpen(false)
    setter(true)
  }

  const q = query.trim().toLowerCase()
  const results = q
    ? FILES.filter(
        (f) => f.name.toLowerCase().includes(q) || f.desc.toLowerCase().includes(q)
      )
    : FILES

  const handleSelect = (file) => {
    onNavigate(file.tab)
    setGoToOpen(false)
    setQuery('')
  }

  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <div className="tb-dropdown-wrap" ref={branchRef}>
          <button
            type="button"
            className="tb-btn branch tb-btn-clickable"
            onClick={() => (branchOpen ? setBranchOpen(false) : openOnly(setBranchOpen))}
            aria-expanded={branchOpen}
          >
            <IconGitFork size={13} /> main <IconChevronDown size={12} />
          </button>

          {branchOpen && (
            <div className="tb-dropdown-menu branch-menu-wrap">
              <BranchMenu onClose={() => setBranchOpen(false)} />
            </div>
          )}
        </div>

        <span className="tb-stat">
          <IconGitFork size={13} /> 1 Branch
        </span>
        <span className="tb-stat">
          <IconTag size={13} /> 0 Tags
        </span>
      </div>

      <div className="toolbar-right">
        <div className="tb-dropdown-wrap goto-file-wrap" ref={goToRef}>
          <label className="tb-search">
            <IconSearch size={13} />
            <input
              type="text"
              value={query}
              placeholder="Go to file"
              onFocus={() => openOnly(setGoToOpen)}
              onChange={(e) => {
                setQuery(e.target.value)
                setGoToOpen(true)
              }}
            />
          </label>

          {goToOpen && (
            <div className="tb-dropdown-menu goto-file-menu">
              {results.length === 0 ? (
                <div className="goto-file-empty">Ничего не найдено</div>
              ) : (
                results.map((file) => {
                  const Icon = file.icon
                  return (
                    <button
                      key={file.name}
                      type="button"
                      className="goto-file-item"
                      onClick={() => handleSelect(file)}
                    >
                      <Icon size={14} className="goto-file-icon" />
                      <span className="goto-file-name">{file.name}</span>
                      <span className="goto-file-desc">{file.desc}</span>
                    </button>
                  )
                })
              )}
            </div>
          )}
        </div>

        <div className="tb-dropdown-wrap" ref={addFileRef}>
          <button
            type="button"
            className="tb-btn tb-btn-clickable"
            onClick={() => (addFileOpen ? setAddFileOpen(false) : openOnly(setAddFileOpen))}
            aria-expanded={addFileOpen}
          >
            Add file <IconChevronDown size={12} />
          </button>

          {addFileOpen && (
            <div className="tb-dropdown-menu">
              <button type="button" className="tb-dropdown-item">
                <IconPlus size={14} /> Create new file
              </button>
              <button type="button" className="tb-dropdown-item">
                <IconUpload size={14} /> Upload files
              </button>
            </div>
          )}
        </div>

        <div className="tb-dropdown-wrap" ref={codeRef}>
          <button
            type="button"
            className="tb-btn code tb-btn-clickable"
            onClick={() => (codeOpen ? setCodeOpen(false) : openOnly(setCodeOpen))}
            aria-expanded={codeOpen}
          >
            <IconCode size={13} /> Code <IconChevronDown size={12} />
          </button>

          {codeOpen && (
            <div className="tb-dropdown-menu code-menu-wrap">
              <CodeMenu />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
