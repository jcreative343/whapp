import { signOut } from 'aws-amplify/auth';

function SignOutButton() {
  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.reload(); // Or navigate to login page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 20,
      right: 20,
      zIndex: 999,
    }}>
      <button
        onClick={handleSignOut}
        style={{
          backgroundColor: '#4da6ff',
          color: 'white',
          padding: '8px 16px',
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: 14,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          transition: 'background 0.3s',
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#1e90ff'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#4da6ff'}
      >
        Sign Out
      </button>
    </div>
  );
}

export default SignOutButton;
