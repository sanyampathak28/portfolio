import React from 'react'
import resume from '../data/resume'

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h3>Experience</h3>
        {resume.experiences.map((exp, idx) => (
          <article className="exp" key={idx}>
            <div className="exp-header">
              <h4>{exp.project}</h4>
              <div className="muted">{exp.dateRange} — {exp.location}</div>
            </div>
            <div className="exp-role">{exp.role} @ <strong>{exp.company}</strong></div>
            <ul>
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
