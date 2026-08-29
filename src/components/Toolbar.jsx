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
import CodeMenu from './CodeMenu.jsx'

export default function Toolbar() {
  const [addFileOpen, setAddFileOpen] = useState(false)
  const [codeOpen, setCodeOpen] = useState(false)
  const addFileRef = useRef(null)
  const codeRef = useRef(null)

  useEffect(() => {
    function handleOutside(e) {
      if (addFileRef.current && !addFileRef.current.contains(e.target)) {
        setAddFileOpen(false)
      }
      if (codeRef.current && !codeRef.current.contains(e.target)) {
        setCodeOpen(false)
      }
    }
    function handleEscape(e) {
      if (e.key === 'Escape') {
        setAddFileOpen(false)
        setCodeOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <span className="tb-btn branch">
          <IconGitFork size={13} /> main <IconChevronDown size={12} />
        </span>
        <span className="tb-stat">
          <IconGitFork size={13} /> 1 Branch
        </span>
        <span className="tb-stat">
          <IconTag size={13} /> 0 Tags
        </span>
      </div>

      <div className="toolbar-right">
        <span className="tb-search">
          <IconSearch size={13} /> Go to file
        </span>

        <div className="tb-dropdown-wrap" ref={addFileRef}>
          <button
            type="button"
            className="tb-btn tb-btn-clickable"
            onClick={() => {
              setAddFileOpen((v) => !v)
              setCodeOpen(false)
            }}
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
            onClick={() => {
              setCodeOpen((v) => !v)
              setAddFileOpen(false)
            }}
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
