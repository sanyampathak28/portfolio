import React from 'react'
import resume from '../data/resume'

const IconLink: React.FC<{ href: string; label: string; children: React.ReactNode }> = ({ href, label, children }) => (
  <a href={href} target="_blank" rel="noreferrer" className="muted" style={{display:'inline-flex',alignItems:'center',gap:8,textDecoration:'none'}} aria-label={label}>
    <span style={{width:18,height:18,display:'inline-block'}}>{children}</span>
    <span style={{fontSize:13}}>{label}</span>
  </a>
)

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div style={{display:'flex',flexDirection:'column',gap:6}}>
          <div style={{fontWeight:700}}>© {new Date().getFullYear()} {resume.name}</div>
          <div className="muted" style={{fontSize:13}}>Software Development Engineer — {resume.contact.email}</div>
        </div>

        <div style={{display:'flex',gap:14,alignItems:'center'}}>
          <IconLink href={resume.contact.linkedin} label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5z" fill="currentColor"/><path d="M0 8.99h5V24H0zM9 8.99h4.78v2.05h.07c.66-1.25 2.27-2.57 4.67-2.57C23.07 8.47 24 11.2 24 14.77V24h-5v-8.73c0-2.08-.04-4.75-2.9-4.75-2.9 0-3.34 2.27-3.34 4.6V24H9V8.99z" fill="currentColor"/></svg>
          </IconLink>

          <IconLink href={resume.contact.leetcode || '#'} label="LeetCode">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M21.6 14.4c-.9 3-3.9 5.4-7.6 5.4-4.41 0-8-3.59-8-8 0-3.7 2.4-6.7 5.4-7.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </IconLink>

          <IconLink href={resume.contact.hackerrank || '#'} label="HackerRank">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L22 7v10l-10 5L2 17V7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </IconLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
