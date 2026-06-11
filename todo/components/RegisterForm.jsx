import { useState } from 'react';

function RegisterForm() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' })); // clear error on type
  }

  function validate() {
    const newErrors = {};
    if (form.username.length < 3) newErrors.username = 'Min 3 characters';
    if (!form.email.includes('@')) newErrors.email = 'Invalid email';
    if (form.password.length < 6) newErrors.password = 'Min 6 characters';
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Submitted!', form);
    setForm({ username: '', email: '', password: '' }); // clear form
    setErrors({});
  }

  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />
          {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        </div>

        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
