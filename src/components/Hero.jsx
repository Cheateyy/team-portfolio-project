import { Link } from 'react-router-dom'
import { teamMembers } from '../data/teamMembers'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Our Amazing Team</h1>
        <p className="hero-subtitle">
          Meet the talented developers behind our innovative projects
        </p>
        
        <div className="team-grid">
          {teamMembers.map((member) => (
            <Link 
              key={member.id} 
              to={`/member/${member.id}`}
              className="member-card"
            >
              <div className="member-avatar">
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/150/6366F1/FFFFFF?text=${member.name.split(' ').map(n => n[0]).join('')}`
                  }}
                />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <div className="member-skills">
                {member.skills.slice(0, 3).map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
