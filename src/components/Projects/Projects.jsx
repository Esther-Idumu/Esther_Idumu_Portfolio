import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Projects.css';

// Every card opens that project's own page at /projects/<slug>.
export default function Projects({ items }) {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-title">
      <SectionTitle id="projects-title" text="Projects" cursor="start" align="right" invert />
      <div className="projects__grid">
        {items.map((project, index) => (
          <Link key={project.slug} to={`/projects/${project.slug}`} className="project-card">
            <span className="project-card__num">
              {String(index + 1).padStart(2, '0')}
              {project.status && ` · ${project.status}`}
            </span>
            <span className="project-card__arrow" aria-hidden="true">→</span>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__subtitle">{project.subtitle}</p>
            <p className="project-card__description">{project.summary}</p>
            <p className="project-card__tags">{(project.cardTags ?? project.tags).join(' / ')}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}