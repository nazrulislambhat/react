import React, { useReducer } from 'react';

const initialFormState = {
  username: '',
  email: '',
  password: '',
  errors: {},
};

function formReducer(state, action) {
  switch (action.type) {
    case 'field':
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: '' },
      };
    case 'validate':
      const errors = {};
      if (!state.username) errors.username = 'Username is required';
      if (!state.email.includes('@')) errors.email = 'Invalid email';
      if (state.password.length < 6) errors.password = 'Password too short';
      return { ...state, errors };
    case 'reset':
      return initialFormState;
    default:
      throw new Error('Unknown action type');
  }
}

function RegistrationForm() {
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const { username, email, password, errors } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'validate' });
    if (Object.keys(errors).length === 0) {
      // Submit form
      console.log('Form submitted:', { username, email, password });
      dispatch({ type: 'reset' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={username}
          onChange={(e) =>
            dispatch({
              type: 'field',
              field: 'username',
              value: e.target.value,
            })
          }
          placeholder="Username"
        />
        <span>{errors.username}</span>
      </div>
      <div>
        <input
          value={email}
          onChange={(e) =>
            dispatch({ type: 'field', field: 'email', value: e.target.value })
          }
          placeholder="Email"
        />
        <span>{errors.email}</span>
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) =>
            dispatch({
              type: 'field',
              field: 'password',
              value: e.target.value,
            })
          }
          placeholder="Password"
        />
        <span>{errors.password}</span>
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
