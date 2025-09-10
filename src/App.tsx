import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import TabBar from './components/TabBar'

function App() {
  const [activeTab, setActiveTab] = useState('about.md')

  return (
    <div className="app">
      <div className="editor-container">
        <Sidebar activeTab={activeTab} />
        <div className="main-area">
          <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
          <MainContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  )
}

export default App
