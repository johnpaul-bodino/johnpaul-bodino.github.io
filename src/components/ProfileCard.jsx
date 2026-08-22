import profilePhoto from '../assets/paldo.webp'

export default function ProfileCard({ profile }) {
  const {
    imageUrl = profilePhoto,
    imageAlt = 'Profile photo',
    initials = 'JB',
    availability = '',
    availabilityColor = '',
  } = profile

  return (
    <aside className="home__profileCard" aria-label="Profile photo and availability">
      <div className="home__profileFrame">
        <div className="home__profileImageWrap">
          {imageUrl ? (
            <img className="home__profileImage" src={imageUrl} alt={imageAlt} />
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