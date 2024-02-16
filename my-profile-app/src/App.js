import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import ProfilePage from './ProfilePage';

const App = () => {
  const [user, setUser] = useState(null);

  const handleRegister = (formData) => {
    setUser(formData); // In a real app, you would likely send this data to a backend server
  };

  return (
    <div>
      {!user ? (
        <RegistrationForm onRegister={handleRegister} />
      ) : (
        <ProfilePage user={user} />
      )}
    </div>
  );
};

export default App;
