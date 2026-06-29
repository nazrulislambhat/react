import { useState, useEffect, useRef, useCallback } from 'react';

const ITEMS_PER_PAGE = 10;
const ITEM_HEIGHT = 60; // height of each item in px

function InfiniteScroll() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // virtualization state
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(500);

  const containerRef = useRef(null); // scroll container
  const bottomRef = useRef(null); // invisible element at bottom

  // ── fetch posts ─────────────────────────────────────────────────────
  const fetchPosts = useCallback(
    async (pageNum) => {
      if (loading || !hasMore) return;

      setLoading(true);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=${ITEMS_PER_PAGE}`,
        );
        const data = await res.json();

        if (data.length < ITEMS_PER_PAGE) {
          setHasMore(false); // less than a full page = no more data
        }

        setPosts((prev) => [...prev, ...data]); // append to existing posts
      } catch (err) {
        console.error('fetch failed:', err);
      } finally {
        setLoading(false);
      }
    },
    [loading, hasMore],
  );

  // ── initial fetch ────────────────────────────────────────────────────
  useEffect(() => {
    fetchPosts(1);
  }, []);

  // ── Intersection Observer — load more when bottom is visible ─────────
  useEffect(() => {
    if (!bottomRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage((prev) => {
            const nextPage = prev + 1;
            fetchPosts(nextPage);
            return nextPage;
          });
        }
      },
      { threshold: 0.1 }, // trigger when 10% of element is visible
    );

    observer.observe(bottomRef.current);
    return () => observer.disconnect(); // cleanup
  }, [hasMore, loading, fetchPosts]);

  // ── virtualization — track scroll position ───────────────────────────
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function handleScroll() {
      setScrollTop(container.scrollTop);
    }

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // ── virtualization calculations ──────────────────────────────────────
  const totalHeight = posts.length * ITEM_HEIGHT; // total scrollable height
  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT); // first visible item
  const visibleCount = Math.ceil(containerHeight / ITEM_HEIGHT) + 2; // items that fit + buffer
  const endIndex = Math.min(startIndex + visibleCount, posts.length);
  const visiblePosts = posts.slice(startIndex, endIndex); // ONLY these get rendered
  const offsetY = startIndex * ITEM_HEIGHT; // push visible items down correctly

  return (
    <div style={{ padding: '24px', fontFamily: 'Arial' }}>
      <h1>Posts ({posts.length} loaded)</h1>

      {/* scroll container — fixed height, scrollable */}
      <div
        ref={containerRef}
        style={{
          height: `${containerHeight}px`,
          overflowY: 'auto',
          border: '1px solid #ddd',
          borderRadius: '8px',
          position: 'relative',
        }}
      >
        {/* full height div — makes scrollbar correct size */}
        <div style={{ height: `${totalHeight}px`, position: 'relative' }}>
          {/* only visible items rendered here */}
          <div style={{ transform: `translateY(${offsetY}px)` }}>
            {visiblePosts.map((post) => (
              <div
                key={post.id}
                style={{
                  height: `${ITEM_HEIGHT}px`,
                  padding: '0 16px',
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: '1px solid #eee',
                  fontSize: '14px',
                }}
              >
                <span
                  style={{
                    width: '32px',
                    height: '32px',
                    background: '#534AB7',
                    color: '#fff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    marginRight: '12px',
                    flexShrink: 0,
                  }}
                >
                  {post.id}
                </span>
                <span
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {post.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* invisible element at bottom — triggers load more */}
        <div ref={bottomRef} style={{ height: '1px' }} />
      </div>

      {/* loading spinner */}
      {loading && (
        <p style={{ textAlign: 'center', color: '#666', marginTop: '12px' }}>
          Loading more posts...
        </p>
      )}

      {/* end of list */}
      {!hasMore && (
        <p style={{ textAlign: 'center', color: '#999', marginTop: '12px' }}>
          You've reached the end!
        </p>
      )}
    </div>
  );
}

export default InfiniteScroll;
