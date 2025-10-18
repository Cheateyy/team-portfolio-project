import { useParams, Link } from 'react-router-dom'
import { teamMembers } from '../data/teamMembers'
import './TeamMember.css'

const TeamMember = () => {
  const { id } = useParams()
  const member = teamMembers.find(m => m.id === id)

  if (!member) {
    return (
      <div className="error-page">
        <h1>Member not found</h1>
        <Link to="/" className="back-link">← Back to Team</Link>
      </div>
    )
  }

  return (
    <div className="member-page">
      <div className="member-header">
        <Link to="/" className="back-link">← Back to Team</Link>
        <div className="member-profile">
          <div className="member-avatar-large">
            <img 
              src={member.avatar} 
              alt={member.name}
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/200/6366F1/FFFFFF?text=${member.name.split(' ').map(n => n[0]).join('')}`
              }}
            />
          </div>
          <div className="member-info">
            <h1 className="member-name-large">{member.name}</h1>
            <p className="member-role-large">{member.role}</p>
            {member.github && (
              <a 
                href={`https://github.com/${member.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                @{member.github}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="member-content">
        <div className="content-section">
          <h2>About</h2>
          <p className="member-bio">{member.bio}</p>
        </div>

        <div className="content-section">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            {member.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-name">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {member.github && (
          <div className="content-section">
            <h2>GitHub Profile</h2>
            <p>Check out my work and contributions on GitHub:</p>
            <a 
              href={`https://github.com/${member.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View GitHub Profile
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default TeamMember
