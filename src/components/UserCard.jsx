import '../../src/index.css';

function UserCard(props) {
  return (
    <div className='cards'>
      <div className="card">
        <p className="name">Name: {props.name}</p>
        <p className="language">Lang: {props.language}</p>
        <p className="id">Id: {props.id}</p>
        <p className="bio">Bio: {props.bio}</p>
        <p className="version">Version: {props.version}</p>
      </div>
    </div>
  );
}

export default UserCard;
