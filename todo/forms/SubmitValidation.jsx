import React from 'react';
import { useState } from 'react';

function SubmitValidation() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (!form.email) newErrors.email = 'Email is required';
    else if (!form.email.includes('@')) newErrors.email = 'Invalid Email';

    if (!form.password) newErrors.password = 'Password is required';
    else if (form.password.length < 6)
      newErrors.password = 'Min 6 Char Password Required';

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Submitted', form);
    setErrors({});
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default SubmitValidation;
