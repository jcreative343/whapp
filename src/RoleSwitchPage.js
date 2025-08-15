import { fetchUserAttributes, getCurrentUser, updateUserAttributes } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';
import Sidebar from './ui-components/SideBar';

export default function RoleSwitchPage() {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSelect = async (choice) => {
    try {
      const user = await getCurrentUser();
      await updateUserAttributes(user, {
        'custom:SignedInAs': choice,
      });
      setSelectedRole(choice);
    } catch (error) {
      console.error('Failed to update SignedInAs:', error);
    }
  };

  // Check if SignedInAs is already set on mount
  useEffect(() => {
    const loadSignedInAs = async () => {
      try {
        const attributes = await fetchUserAttributes();
        const role = attributes['custom:SignedInAs'];
        if (role) {
          setSelectedRole(role);
        }
      } catch (err) {
        console.error('Failed to load SignedInAs:', err);
      }
    };

    loadSignedInAs();
  }, []);

  if (selectedRole) {
    return (
      <main style={{ textAlign: 'center' }}>
        <Sidebar />
      </main>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Continue as:</h2>
      <button onClick={() => handleSelect('Professional')} className="amplify-button">
        Continue as Professional
      </button>
      <button
        onClick={() => handleSelect('Individual')}
        className="amplify-button"
        style={{ marginLeft: '1rem' }}
      >
        Continue as Individual
      </button>
    </div>
  );
}
