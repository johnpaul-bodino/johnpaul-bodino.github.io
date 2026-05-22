export default function ProfileCard({ profile }) {
  const {
    imageUrl = '/paldo.png',
    imageAlt = 'Profile photo',
    initials = 'JB',
    availability = 'Open to work',
    availabilityColor = '#31a24c',
  } = profile

  return (
    <aside className="home__profileCard" aria-label="Profile photo and availability">
      <div className="home__profileImageWrap">
        {imageUrl ? (
          <img className="home__profileImage" src={imageUrl} alt={imageAlt} />
        ) : (
          <div className="home__profilePlaceholder" aria-label={imageAlt}>
            <span>{initials}</span>
          </div>
        )}
      </div>
      <div className="home__profileMeta">
        <span className="home__status" style={{ '--status-color': availabilityColor }}>
          <span className="home__statusDot" aria-hidden="true"></span>
          {availability}
        </span>
      </div>
    </aside>
  )
}
