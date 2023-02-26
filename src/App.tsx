import './App.css'
import HeaderForPC from './components/HeaderForPC/HeaderForPC'
import SideNav from './components/SideNav/SideNav'
import Aphorism from './pages/aphorisms/Aphorism'

function App() {
  return (
    <div className="content">
      <SideNav />
      <div className="main-content">
        <HeaderForPC />
        <Aphorism />
      </div>
    </div>
  )
}

export default App
