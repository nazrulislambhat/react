import React from 'react';
import Props from './components/Props';
import UserCard from './components/UserCard';
import users from './user.json';
class App extends React.Component {
  render() {
    return (
      <div className="cards">
        {/* {users.map((user) => {
          return (
            <UserCard
              key={user.id}
              name={user.name}
              language={user.language}
              id={user.id}
              bio={user.bio}
              version={user.version}
            />
          );
        })} */}
      </div>
    );
  }
}
export default App;
