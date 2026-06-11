import useToggle from '../hooks/useToggle';

const Accordion = () => {
  const { status: expanded, toggleStatus: toggleExpanded } = useToggle();

  return (
    <div>
      <button onClick={toggleExpanded}>
        Header <span>{expanded ? '-' : '+'}</span>
      </button>
      {expanded && <div>Some Expanded Content</div>}
    </div>
  );
};
export default Accordion;
