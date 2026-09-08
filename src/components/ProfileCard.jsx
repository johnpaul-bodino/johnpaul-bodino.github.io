export default function ProfileCard({ profile = {} }) {
  const {
    imageUrl,
    imageAlt = 'John Paul Bodino profile photo',
    initials = 'JB',
  } = profile

  return (
    <aside className="home__profileCard" aria-label="Profile photo">
      <div className="home__profileFrame">
        <div className="home__profileImageWrap">
          {imageUrl ? (
            <img
              className="home__profileImage"
              src={imageUrl}
              alt={imageAlt}
              loading="eager"
              fetchpriority="high"
            />
          ) : (
            <div className="home__profilePlaceholder" aria-label={imageAlt}>
              <span>{initials}</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}