import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import BrowseJournals from './pages/BrowseJournals'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<BrowseJournals />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  )
}
