import React from 'react';
import { useState } from 'react';

function BlurValidation() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const isValid = form.email.includes('@') && form.password.length >= 6;

  function validateField(name, value) {
    if (name === 'name') {
      if (!value) return 'Name is Required';
      if (value.length < 3) return 'Min 3 characters required';
    }
    if (name === 'email') {
      if (!value) return 'Email is required';
      if (!value.includes('@')) return 'Email is invalid';
    }
    return '';
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log('Submitted!', form);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.name && errors.name && (
          <p style={{ color: 'red' }}>{errors.name}</p>
        )}
      </div>
      <div>
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && (
          <p style={{ color: 'red' }}>{errors.email}</p>
        )}
      </div>
      <button type="submit" disabled={!isValid}>
        Register
      </button>
    </form>
  );
}

export default BlurValidation;
