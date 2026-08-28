import { useState } from 'react'
import TopBar from './components/TopBar.jsx'
import RepoHeader from './components/RepoHeader.jsx'
import Tabs from './components/Tabs.jsx'
import FileExplorer from './components/FileExplorer.jsx'
import Readme from './components/Readme.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'
import './styles/layout.css'

export default function App() {
  const [activeTab, setActiveTab] = useState('code')

  return (
    <>
      <TopBar />
      <RepoHeader />
      <Tabs activeTab={activeTab} onChange={setActiveTab} />

      <div className="main">
        <div className="wrap">
          <div className="grid">
            <div>
              <FileExplorer onNavigate={setActiveTab} />
              <Readme activeTab={activeTab} />
            </div>
            <Sidebar activeTab={activeTab} onNavigate={setActiveTab} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
