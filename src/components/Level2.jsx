import Level3 from './Level3';
export default function Level2({ username }) {
  return (
    <div>
      <h2>Level 2</h2>
      <Level3 username={username} />
    </div>
  );
}
