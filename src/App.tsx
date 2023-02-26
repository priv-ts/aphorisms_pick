import { Route, Routes } from 'react-router-dom'
import './App.css'
import SideNav from './components/SideNav/SideNav'
import About from './pages/about/About'
import AphorismList from './pages/aphorism/List/AphorismList'
import AphorismNew from './pages/aphorism/New/AphorismNew'
import AphorismShow from './pages/aphorism/Show/AphorismShow'
import NotFound from './pages/notFound/NotFound'
import Profile from './pages/profile/Profile'
import User from './pages/user/User'

function App() {
  return (
    <div className="content">
      <SideNav />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<AphorismList />} />
          <Route path="/aphorisms" element={<AphorismList />} />
          <Route path="/aphorisms/new" element={<AphorismNew />} />
          <Route path="/users" element={<User />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
