import { useState, ReactNode } from 'react';

// Define the props interface for type safety
interface ProfileCardProps {
  name: string;
  age: number;
  email: string;
  children: ReactNode; // bio content passed as children
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, age, email, children }) => {
  // State to manage bio visibility
  const [showBio, setShowBio] = useState<boolean>(false);

  // Event handler with proper typing
  const handleToggleBio = (): void => {
    setShowBio(!showBio);
  };

  return (
    <div className="profile-card">
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-age">Age: {age}</p>
        <p className="profile-email">Email: {email}</p>
      </div>
      
      <button 
        className="toggle-bio-btn"
        onClick={handleToggleBio}
        type="button"
      >
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>
      
      {showBio && (
        <div className="profile-bio">
          {children}
        </div>
      )}
    </div>
  );
};

export default ProfileCard;

