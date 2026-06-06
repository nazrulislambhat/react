import React from 'react';

function MultipleInputs() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    age: '',
    gender: 'male',
    agreed: false,
    country: 'India',
    bio: '',
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  return (
    <form>
      {/* text */}
      <input
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />

      {/* email */}
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />

      {/* number */}
      <input
        name="age"
        type="number"
        value={form.age}
        onChange={handleChange}
      />

      {/* radio */}
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={form.gender === 'male'}
          onChange={handleChange}
        />{' '}
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={form.gender === 'female'}
          onChange={handleChange}
        />{' '}
        Female
      </label>

      {/* checkbox */}
      <label>
        <input
          type="checkbox"
          name="agreed"
          checked={form.agreed}
          onChange={handleChange}
        />{' '}
        I agree to terms
      </label>

      {/* select */}
      <select name="country" value={form.country} onChange={handleChange}>
        <option value="India">India</option>
        <option value="Pakistan">Pakistan</option>
        <option value="UAE">UAE</option>
      </select>

      {/* textarea */}
      <textarea
        name="bio"
        value={form.bio}
        onChange={handleChange}
        placeholder="Tell us about yourself"
      />

      <button type="submit">Submit</button>
    </form>
  );
}
export default MultipleInputs;
