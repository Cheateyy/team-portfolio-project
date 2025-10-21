import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import TeamMember from './pages/TeamMember'
import './App.css'
import SadjedaPage from "./members/sadjeda/MemberPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/member/sadjeda" element={<SadjedaPage/>} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
