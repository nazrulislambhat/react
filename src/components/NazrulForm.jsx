import { useState } from 'react';

function NazrulForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  let handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  let handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <h1>NazrulForm</h1>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <label>email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        ></input>
        <label>mobile</label>
        <input
          type="number"
          name="mobile"
          placeholder="phone"
          value={formData.mobile}
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default NazrulForm;
