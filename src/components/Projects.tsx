import React from 'react'
import resume from '../data/resume'

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h3>Projects</h3>
        <div className="projects-list">
          {resume.projects.map((p, i) => (
            <div className="project-card" key={i}>
              <h4>{p.name}</h4>
              <p>{p.desc}</p>
              <p className="muted">Tech: {p.tech.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
