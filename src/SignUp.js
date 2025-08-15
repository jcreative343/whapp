// SignUp.jsx
import { signUp } from 'aws-amplify/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
    given_name: '',
    family_name: '',
    birthdate: '',
    'custom:accountType': 'Individual',
    address: '',
    'custom:City': '',
    'custom:State': '',
    'custom:ZipCode': '',
    website: ''
  });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await signUp({
  username: form.username,
  password: form.password,
  options: {
    userAttributes: {
      email: form.email,
      given_name: form.given_name,
      family_name: form.family_name,
      birthdate: form.birthdate,
      address: form.address,
      'custom:accountType': form['custom:accountType'],
      'custom:City': form['custom:City'],
      'custom:State': form['custom:State'],
      'custom:ZipCode': form['custom:ZipCode'],
      website: form.website
    }
  }
});

      navigate('/');
    } catch (err) {
      setError(err.message);
    }
    setSubmitting(false);
  };

  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" required onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" required onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
        <input name="given_name" placeholder="First Name" required onChange={handleChange} />
        <input name="family_name" placeholder="Last Name" required onChange={handleChange} />
        <input name="birthdate" type="date" required onChange={handleChange} />

        <select name="custom:accountType" value={form['custom:accountType']} onChange={handleChange}>
          <option value="Individual">Individual</option>
          <option value="Professional">Professional</option>
          <option value="Organization">Organization</option>
        </select>

        {(form['custom:accountType'] === 'Professional' || form['custom:accountType'] === 'Organization') && (
          <>
            <input name="address" placeholder="Address" required onChange={handleChange} />
            <input name="custom:City" placeholder="City" required onChange={handleChange} />
            <input name="custom:State" placeholder="State" required onChange={handleChange} />
            <input name="custom:ZipCode" placeholder="Zip Code" required onChange={handleChange} />
          </>
        )}

        <input name="website" placeholder="Website (optional)" onChange={handleChange} />

        <div className="terms">
          <label>
            <input type="checkbox" required /> I agree to the Terms and Privacy Policy
          </label>
        </div>

        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Sign Up'}</button>
      </form>
    </div>
  );
}
