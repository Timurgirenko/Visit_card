import '../styles/topbar.css'
import { IconSearch, IconBell, IconGitFork } from './Icon.jsx'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="mark">TG</div>
        <div className="crumbs">
          <b>timurgirenko</b>
          <span className="slash">/</span>timurgirenko
        </div>
        <div className="search">
          <IconSearch size={14} /> Type to search
        </div>
        <div className="topbar-icons">
          <IconBell size={16} />
          <IconGitFork size={16} />
        </div>
      </div>
    </div>
  )
}
