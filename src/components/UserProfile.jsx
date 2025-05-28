const UserProfile = ({ user, theme }) => {
  return (
    <div style={{ color: theme.color, fontFamily: theme.fontFamily }}>
      <h1>Hello {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};
export default UserProfile;
