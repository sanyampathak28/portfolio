import React, { useState } from 'react'
import resume from '../data/resume'

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <h1>{resume.name}</h1>
          <p className="muted">{resume.title}</p>
        </div>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? 'open' : ''}`}>
          <a href="#experience" onClick={handleLinkClick}>Experience</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
