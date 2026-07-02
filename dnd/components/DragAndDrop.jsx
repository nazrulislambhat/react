import { useState, useRef } from 'react';

const INITIAL_ITEMS = [
  { id: 1, text: '🎯 Build Todo App', color: '#534AB7' },
  { id: 2, text: '🔍 Search with Debounce', color: '#1D9E75' },
  { id: 3, text: '📊 Dashboard with Charts', color: '#378ADD' },
  { id: 4, text: '✨ Autocomplete Component', color: '#E24B4A' },
  { id: 5, text: '♾️ Infinite Scroll', color: '#EF9F27' },
  { id: 6, text: '🎭 Modal Focus Management', color: '#9B59B6' },
  { id: 7, text: '🖱️ Drag and Drop List', color: '#2ECC71' },
];

function DragAndDrop() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [draggingId, setDraggingId] = useState(null); // which item is being dragged
  const [hoverIndex, setHoverIndex] = useState(null); // which position we're hovering over
  const dragIndex = useRef(null); // index of item being dragged

  // ── reorder helper ────────────────────────────────────────────────
  function reorder(list, fromIndex, toIndex) {
    const result = [...list];
    const [removed] = result.splice(fromIndex, 1); // remove from old position
    result.splice(toIndex, 0, removed); // insert at new position
    return result;
  }

  // ── drag events ───────────────────────────────────────────────────
  function handleDragStart(e, index) {
    dragIndex.current = index; // remember which item we grabbed
    setDraggingId(items[index].id); // for styling the dragged item
    e.dataTransfer.effectAllowed = 'move';
  }

  function handleDragOver(e, index) {
    e.preventDefault(); // REQUIRED — allows drop
    setHoverIndex(index); // highlight drop target
  }

  function handleDrop(e, index) {
    e.preventDefault();
    if (dragIndex.current === null || dragIndex.current === index) return;

    setItems((prev) => reorder(prev, dragIndex.current, index));
    dragIndex.current = null;
    setDraggingId(null);
    setHoverIndex(null);
  }

  function handleDragEnd() {
    // cleanup if drop was cancelled (e.g. dropped outside list)
    setDraggingId(null);
    setHoverIndex(null);
    dragIndex.current = null;
  }

  return (
    <div
      style={{
        padding: '40px',
        fontFamily: 'Arial',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ marginBottom: '8px' }}>🖱️ Drag to Reorder</h1>
      <p
        style={{
          color: '#666',
          marginBottom: '24px',
          marginTop: '24px',
          fontSize: '14px',
        }}
      >
        Drag any item to reorder the list
      </p>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item, index) => {
          const isDragging = item.id === draggingId;
          const isHovered = index === hoverIndex && !isDragging;

          return (
            <li
              key={item.id}
              draggable // makes element draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={(e) => handleDrop(e, index)}
              onDragEnd={handleDragEnd}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 16px',
                marginBottom: '8px',
                borderRadius: '10px',
                border: isHovered
                  ? '2px dashed #534AB7' // show drop target
                  : '2px solid transparent',
                background: isDragging ? '#f0f0fe' : '#fff',
                boxShadow: isDragging
                  ? '0 8px 24px rgba(0,0,0,0.15)' // lifted shadow while dragging
                  : '0 2px 8px rgba(0,0,0,0.08)',
                opacity: isDragging ? 0.6 : 1, // slightly faded while dragging
                cursor: 'grab',
                transition:
                  'box-shadow 0.2s, border-color 0.15s, opacity 0.15s',
                userSelect: 'none', // prevent text selection while dragging
              }}
            >
              {/* drag handle */}
              <span style={{ color: '#000', fontSize: '18px', cursor: 'grab' }}>
                ⠿
              </span>

              {/* color dot */}
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: item.color,
                  flexShrink: 0,
                }}
              />

              {/* text */}
              <span style={{ flex: 1, fontSize: '14px', fontWeight: 500 }}>
                {item.text}
              </span>

              {/* position number */}
              <span style={{ color: '#ccc', fontSize: '12px' }}>
                #{index + 1}
              </span>
            </li>
          );
        })}
      </ul>

      {/* current order display */}
      <div
        style={{
          marginTop: '24px',
          padding: '16px',
          background: '#f7f6f3',
          borderRadius: '8px',
          fontSize: '12px',
          color: '#666',
        }}
      >
        <strong>Current order:</strong>{' '}
        {items.map((item) => item.text.split(' ')[0]).join(' → ')}
      </div>
    </div>
  );
}

export default DragAndDrop;
