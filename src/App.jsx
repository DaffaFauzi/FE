import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import BrowseJournals from './pages/BrowseJournals'
import CreateAccount from './pages/CreateAccount/CreateRegister'
import About from './pages/About/CreateAbout'
import SubmitPaper from './pages/SubmitPaper'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<BrowseJournals />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<CreateAccount />} />
      <Route path="/about" element={<About />} />
      <Route path="/submit" element={<SubmitPaper />} />
    </Routes>
  )
}
