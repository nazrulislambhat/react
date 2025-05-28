// src/EnhancedUserProfile.js
import UserProfile from './UserProfile';
import withAuth from '../hoc/withAuth';
import withLogger from '../hoc/withLogger';
import withTheme from '../hoc/withTheme';

// Compose manually
const EnhancedUserProfile = withAuth(withLogger(withTheme(UserProfile)));

export default EnhancedUserProfile;
