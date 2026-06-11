function Item({ name, isPacked }) {
  if (isPacked) {
    return <li>{name} ✅</li>;
  }
  return <li>{name} ❌</li>;
}
function PackingList() {
  return (
    <div>
      <h1>PackingList</h1>
      <ul className="item-list">
        <Item name="Laptop" isPacked={true}></Item>
        <Item name="Book" isPacked={true}></Item>
        <Item name="Camera" isPacked={false}></Item>
        <Item name="Headphones" isPacked={false}></Item>
        <Item name="Charger" isPacked={true}></Item>
        <Item name="Water Bottle" isPacked={true}></Item>
        <Item name="Sunglasses" isPacked={false}></Item>
      </ul>
    </div>
  );
}

export default PackingList;
