const withAuth = (WrappedComponent) => {
  return function AuthComponent(props) {
    const token = localStorage.getItem('token');
    if (!token) {
      return <p>Please login to continue..</p>;
    }
    return <WrappedComponent {...props} />;
  };
};
export default withAuth;
