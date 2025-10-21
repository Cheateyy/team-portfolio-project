import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import TeamMember from './pages/TeamMember'
import './App.css'
import AbderraoufPage from "./members/abderraouf/MemberPage";
import BadisPage from "./members/badis/MemberPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/member/abderraouf" element={<AbderraoufPage/>} />
          <Route path="/member/badis" element={<BadisPage/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
