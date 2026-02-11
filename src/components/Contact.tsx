import React from 'react'
import resume from '../data/resume'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section alt">
      <div className="container contact-grid">
        <div>
          <h3>Contact</h3>
          <p>If you'd like to get in touch, send an email or connect on LinkedIn.</p>
          <p>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a href={resume.contact.linkedin} target="_blank" rel="noreferrer">Profile</a>
          </p>
        </div>
        <aside className="certs">
          <h4>Certifications</h4>
          <ul>
            {resume.certifications.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default Contact
