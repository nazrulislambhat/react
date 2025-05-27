function Dialog({ title, content, footer }) {
  return (
    <div className="dialog">
      <h2>{title}</h2>
      <div>{content}</div>
      <div>{footer}</div>
    </div>
  );
}
export default Dialog;
