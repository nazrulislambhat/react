import Level2 from './Level2';
export default function Level1({ username }) {
  return (
    <div>
      <h1>Level 1</h1>
      <Level2 username={username} />
    </div>
  );
}
