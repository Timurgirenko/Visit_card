import '../styles/repoHeader.css'
import { IconFolder, IconStar, IconGitFork, IconEye, IconTag, IconActivity, IconGlobe } from './Icon.jsx'

export default function RepoHeader() {
  return (
    <div className="repo-header">
      <div className="wrap">
        <div className="repo-title-row">
          <IconFolder size={19} className="title-icon" />
          <h1>
            <b>timurgirenko</b> / timurgirenko <span className="badge">Public</span>
          </h1>
        </div>

        <div className="repo-stats">
          <span><IconStar size={14} /> 0 stars</span>
          <span><IconGitFork size={14} /> 0 forks</span>
          <span><IconEye size={14} /> 0 watching</span>
          <span><IconGitFork size={14} /> 1 branch</span>
          <span><IconTag size={14} /> 0 tags</span>
          <span><IconActivity size={14} /> Activity</span>
          <span><IconGlobe size={14} /> Public repository</span>
        </div>

        <span className="open-badge">
          <IconStar size={13} /> Открыт для предложений
        </span>
      </div>
    </div>
  )
}
