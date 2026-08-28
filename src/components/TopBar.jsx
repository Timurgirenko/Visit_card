import '../styles/topbar.css'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="mark">TG</div>
        <div className="crumbs">
          <b>timurgirenko</b>
          <span className="slash">/</span>timurgirenko
        </div>
        <div className="search">🔍 Type to search</div>
        <div className="topbar-icons">
          <span>🔔</span>
          <span>⑂</span>
        </div>
      </div>
    </div>
  )
}
