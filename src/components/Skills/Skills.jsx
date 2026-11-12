import SectionTitle from '../SectionTitle/SectionTitle';
import './Skills.css';

export default function Skills({ groups }) {
  return (
    <section className="skills" aria-labelledby="skills-title">
      <SectionTitle id="skills-title" text="Skills" />
      <div className="skills__grid">
        {groups.map((group) => (
          <div key={group.title} className="skills__group">
            <h3 className="skills__group-title">{group.title}</h3>
            <p className="skills__items">{group.items.join(' • ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
