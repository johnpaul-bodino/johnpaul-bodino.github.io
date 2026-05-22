import '../styles/StarOverlay.css'

export default function StarOverlay({
  className = '',
  opacity = 3.3,
  count = 24,
}) {
  const style = {
    '--star-overlay-opacity': opacity,
  }
  const stars = Array.from({ length: count }, (_, index) => {
    const x = (index * 37 + 11) % 100
    const y = (index * 53 + 17) % 100
    const size = 1 + ((index * 7) % 3) * 0.35
    const delay = `${-((index * 1.7) % 10).toFixed(1)}s`
    const duration = `${7 + (index % 100)}s`

    return {
      id: index,
      style: {
        '--star-x': `${x}%`,
        '--star-y': `${y}%`,
        '--star-size': `${size}px`,
        '--star-delay': delay,
        '--star-duration': duration,
      },
    }
  })

  return (
    <span className={`star-overlay ${className}`.trim()} style={style} aria-hidden="true">
      {stars.map((star) => (
        <span className="star-overlay__star" style={star.style} key={star.id} />
      ))}
    </span>
  )
}
