// SignIn.jsx
import { signIn } from 'aws-amplify/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn({ username: form.username, password: form.password });
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-form">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" required onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" required onChange={handleChange} />
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign In</button>
      </form>
      <p style={{ marginTop: '16px' }}>
        Don't have an account? <a href="/signup">Create one</a>
      </p>
    </div>
  );
}
