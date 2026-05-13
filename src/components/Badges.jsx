import React from 'react'
import '../styles/Badges.css'

const badges = [
]

export default function Badges() {
  return (
    <div className="badges-wrapper" aria-label="Badges">
      {badges.map((b, i) => (
        <span key={i} className={`badge ${b.cls}`}>{b.label}</span>
      ))}
    </div>
  )
}
