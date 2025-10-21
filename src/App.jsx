import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import TeamMember from './pages/TeamMember'
import './App.css'
import AbderraoufPage from "./members/abderraouf/MemberPage";
import AbdelaliPage from './members/abdelali/MemberPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/member/abderraouf" element={<AbderraoufPage/>} />
          <Route path="/member/abdelali" element={<AbdelaliPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
