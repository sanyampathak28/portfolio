import React from 'react'
import resume from '../data/resume'

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <h1>{resume.name}</h1>
          <p className="muted">{resume.title}</p>
        </div>
        <nav className="nav">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
