import { memberData } from './memberData'
import './MemberPage.css'

const AbdelaliPage = () => {
  return (
    <div className="member-page">
      <div className="member-header">
        <div className="member-profile">
          <div className="member-avatar-large">
            <img 
              src={memberData.github ? `https://github.com/${memberData.github}.png` : `https://via.placeholder.com/200/10B981/FFFFFF?text=${memberData.name.split(' ').map(n => n[0]).join('')}`}
              alt={memberData.name}
            />
          </div>
          <div className="member-info">
            <h1 className="member-name-large">{memberData.name}</h1>
            <p className="member-role-large">{memberData.role}</p>
            <div className="member-links">
              {memberData.github && (
                <a 
                  href={`https://github.com/${memberData.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  @{memberData.github}
                </a>
              )}
              {memberData.linkedin && (
                <a 
                  href={memberData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="member-content">
        {/* About Section */}
        <div className="content-section">
          <h2>About Me</h2>
          <p className="member-bio">{memberData.bio}</p>
        </div>

        {/* Skills Section */}
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

        {/* Projects Section */}
        {memberData.projects && memberData.projects.length > 0 && (
          <div className="content-section">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
              {memberData.projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Section */}
        {memberData.experience && memberData.experience.length > 0 && (
          <div className="content-section">
            <h2>Experience</h2>
            <div className="experience-list">
              {memberData.experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                  <p className="period">{exp.period}</p>
                  <p className="description">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="content-section">
          <h2>Get In Touch</h2>
          <div className="contact-info">
            <p><strong>Email:</strong> {memberData.contact.email}</p>
            {memberData.contact.phone && <p><strong>Phone:</strong> {memberData.contact.phone}</p>}
            <p><strong>Location:</strong> {memberData.contact.location}</p>
            <p><strong>Availability:</strong> {memberData.contact.availability}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AbdelaliPage
