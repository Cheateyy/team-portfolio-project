import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import TeamMember from './pages/TeamMember'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/member/:id" element={<TeamMember />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
