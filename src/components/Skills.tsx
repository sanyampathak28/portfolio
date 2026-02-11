import React from 'react'
import resume from '../data/resume'

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <h3>Skills</h3>
        <div className="skill-grid">
          <div>
            <h4>Technical</h4>
            <p>{resume.skills.technical.join(' · ')}</p>
          </div>
          <div>
            <h4>Tools & Frameworks</h4>
            <p>{resume.skills.tools.join(' · ')}</p>
          </div>
          <div>
            <h4>AI / ML</h4>
            <p>{resume.skills.ai.join(' · ')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
