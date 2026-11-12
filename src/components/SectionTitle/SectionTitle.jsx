import './SectionTitle.css';

// cursor: 'end' -> "TITLE_"   'start' -> "_TITLE"
// align: 'left' | 'right'     invert: white text for dark sections
export default function SectionTitle({ id, text, cursor = 'end', align = 'left', invert = false }) {
  const classes = ['section-title', `section-title--${align}`, invert && 'section-title--invert']
    .filter(Boolean)
    .join(' ');

  return (
    <h2 id={id} className={classes}>
      {cursor === 'start' && <span aria-hidden="true">_</span>}
      {text}
      {cursor === 'end' && <span aria-hidden="true">_</span>}
    </h2>
  );
}
