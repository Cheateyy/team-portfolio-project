import { Link } from 'react-router-dom'
import { teamMembers } from '../data/teamMembers'
import heroBackground from '../assets/Home.png'
import ellipseImg from '../assets/Ellipse.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-background" style={{ backgroundImage: `url(${heroBackground})` }}></div>
      {/* Decorative ellipse in top-right */}
      <img
        src={ellipseImg}
        alt=""
        aria-hidden="true"
        className="hero-ellipse"
      />
      <div className="hero-content">
        <h1 className="hero-title">
          G9 Team 2
          <br />
          Growth, Skill, <span className="highlight-text">Trust.</span>
        </h1>
        <p className="hero-subtitle">
          We bring design and technology together to shape your digital dreams.
        </p>
        <div className="availability-badge">
          <span className="status-dot"></span>
          Available for work
        </div>
        
        <h2 className="members-heading">Members</h2>
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
              <div className="member-info-overlay">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
