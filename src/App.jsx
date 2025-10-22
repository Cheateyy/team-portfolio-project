import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import TeamMember from './pages/TeamMember'
import './App.css'

import SadjedaPage from "./members/sadjeda/MemberPage";
import AbderraoufPage from "./members/abderraouf/MemberPage";
import AbdelaliPage from './members/abdelali/MemberPage';
import BadisPage from "./members/badis/MemberPage";
import MinetEllahPage from "./members/minetellah/MemberPage";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />

          <Route path="/member/sadjeda" element={<SadjedaPage/>} />
          <Route path="/member/abderraouf" element={<AbderraoufPage/>} />
          <Route path="/member/abdelali" element={<AbdelaliPage />} />
          <Route path="/member/badis" element={<BadisPage/>} />
          <Route path="/member/minetellah" element={<MinetEllahPage/>} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
