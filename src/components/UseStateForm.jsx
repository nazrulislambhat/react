import { useState } from 'react';

export default function UseStateForm() {
  const [form, setForm] = useState({
    firstName: 'Nazrul',
    lastName: 'Islam',
    email: 'nazrul@stacknothing.com',
  });
  return (
    <div>
      <h1>UseState Form</h1>
      <label>
        First Name:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Last Name:
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>
      <p>
        {form.firstName} {form.lastName}
        <span> | </span>
        {form.email}
      </p>
    </div>
  );
}
