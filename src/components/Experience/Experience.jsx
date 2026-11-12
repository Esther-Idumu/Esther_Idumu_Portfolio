import SectionTitle from '../SectionTitle/SectionTitle';
import './Experience.css';

export default function Experience({ items, title = 'Experience', id = 'experience' }) {
  const titleId = `${id}-title`;

  return (
    <section className="experience" id={id} aria-labelledby={titleId}>
      <SectionTitle id={titleId} text={title} />
      <ol className="experience__list">
        {items.map((item, index) => (
          <li key={item.id} className="exp-card">
            <span className="exp-card__num" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="exp-card__year">{item.year}</span>
            <h3 className="exp-card__role">{item.role}</h3>
            <p className="exp-card__company">{item.company}</p>
            <p className="exp-card__summary">{item.summary}</p>
            <p className="exp-card__tags">{item.tags.join(' / ')}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}