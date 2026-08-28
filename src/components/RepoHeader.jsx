import '../styles/repoHeader.css'

export default function RepoHeader() {
  return (
    <div className="repo-header">
      <div className="wrap">
        <div className="repo-title-row">
          <span style={{ fontSize: 20 }}>📁</span>
          <h1>
            <b>timurgirenko</b> / timurgirenko <span className="badge">Public</span>
          </h1>
        </div>
        <div className="repo-actions">
          <span className="btn">📌 Pin</span>
          <span className="btn">
            👁 Watch <span className="count">1</span>
          </span>
          <span className="btn">
            ⑂ Fork <span className="count">0</span>
          </span>
          <span className="btn primary">⭐ Открыт для предложений</span>
        </div>
      </div>
    </div>
  )
}
