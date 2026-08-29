import { useState } from 'react'
import TopBar from './components/TopBar.jsx'
import RepoHeader from './components/RepoHeader.jsx'
import Tabs from './components/Tabs.jsx'
import Toolbar from './components/Toolbar.jsx'
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
      <Tabs activeTab={activeTab} onChange={setActiveTab} />
      <RepoHeader />

      <div className="main">
        <div className="wrap">
          <div className="grid">
            <div>
              {activeTab === 'code' && (
                <>
                  <Toolbar onNavigate={setActiveTab} />
                  <FileExplorer onNavigate={setActiveTab} />
                </>
              )}
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
