import { memberData } from './memberData'
import './MemberPage.css'

const MinetellahPage = () => {
  return (
    <div className="member-page">
      <div className="member-header">
        <div className="member-profile">
          <div className="member-avatar-large">
            <img 
              src={`https://via.placeholder.com/200/EF4444/FFFFFF?text=${memberData.name.split(' ').map(n => n[0]).join('')}`}
              alt={memberData.name}
            />
          </div>
          <div className="member-info">
            <h1 className="member-name-large">{memberData.name}</h1>
            <p className="member-role-large">{memberData.role}</p>
          </div>
        </div>
      </div>

      <div className="member-content">
        <div className="content-section">
          <h2>About Me</h2>
          <p className="member-bio">{memberData.bio}</p>
        </div>

        <div className="content-section">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            {memberData.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-name">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <h2>Get In Touch</h2>
          <div className="contact-info">
            <p><strong>Email:</strong> {memberData.contact.email}</p>
            <p><strong>Location:</strong> {memberData.contact.location}</p>
            <p><strong>Availability:</strong> {memberData.contact.availability}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MinetellahPage
