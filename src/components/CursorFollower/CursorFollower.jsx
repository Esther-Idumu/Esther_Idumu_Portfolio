import { useEffect, useRef } from 'react';
import './CursorFollower.css';

// A dot that trails the mouse. It moves with direct DOM updates (no React state)
// so it never re-renders the page. Hidden on touch devices.
export default function CursorFollower() {
  const dotRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;

    const dot = dotRef.current;
    const size = 24;
    let x = -100;
    let y = -100;
    let targetX = -100;
    let targetY = -100;
    let frame;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.opacity = '1';
    };
    const onLeave = () => {
      dot.style.opacity = '0';
    };
    const tick = () => {
      x += (targetX - x) * 0.18; // 0.18 = how "laggy" the follow feels
      y += (targetY - y) * 0.18;
      dot.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
}
