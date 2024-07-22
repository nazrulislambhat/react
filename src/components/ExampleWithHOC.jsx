import React from 'react';

function withAuthorization(Component) {
  return function AuthorizedComponent(props) {
    return props.isLoggedIn ? (
      <Component {...props} />
    ) : (
      <h1>Please sign in.</h1>
    );
  };
}

function UserDashboard() {
  return <h1>Welcome to your dashboard!</h1>;
}

const AuthorizedUserDashboard = withAuthorization(UserDashboard);

function ExampleWithHOC() {
  const isLoggedIn = true;

  return (
    <div>
      <AuthorizedUserDashboard isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default ExampleWithHOC;
