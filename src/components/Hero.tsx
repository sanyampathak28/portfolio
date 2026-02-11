import React from 'react'
import resume from '../data/resume'

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <h2>Hi, I'm {resume.name}.</h2>
          <p className="lead">A {resume.title} focused on backend systems, automation, and scalable services.</p>
          <div className="contact-inline">
            <a href={`mailto:${resume.contact.email}`} className="btn">
              Email
            </a>
            <a href={resume.contact.linkedin} target="_blank" rel="noreferrer" className="btn ghost">
              LinkedIn
            </a>
          </div>
        </div>
        <aside className="quick-contact">
          <div>
            <strong>Email</strong>
            <div>{resume.contact.email}</div>
          </div>
          <div>
            <strong>Phone</strong>
            <div>{resume.contact.phone}</div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Hero
