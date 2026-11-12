import { useEffect } from 'react';
    import { Link, Navigate, useParams } from 'react-router-dom';
    import Block from './Block';
    import Contact from '../../components/Contact/Contact';
    import { projects } from '../../data/projects';
    import { profile } from '../../data/profile';
    import './ProjectPage.css';

    // One page template for every project. The URL (/projects/verivoice) picks
    // which entry from src/data/projects.js is shown.
    export default function ProjectPage() {
    const { slug } = useParams();
    const index = projects.findIndex((p) => p.slug === slug);
    const project = projects[index];

    useEffect(() => {
        if (!project) return undefined;
        const previous = document.title;
        document.title = `${project.title} | ${profile.hero.left.name} ${profile.hero.right.name}`;
        return () => {
        document.title = previous;
        };
    }, [project]);

    if (!project) return <Navigate to="/" replace />;

    const next = projects[(index + 1) % projects.length];

    return (
        <main className="project">
        <header className="project-hero">
            <Link to="/#projects" className="project-hero__back">
            ← All projects
            </Link>

            {project.status && <p className="project-hero__status">{project.status}</p>}
            <h1 className="project-hero__title">{project.title}</h1>
            <p className="project-hero__subtitle">{project.subtitle}</p>

            <p className="project-hero__headline">{project.headline}</p>
            <p className="project-hero__intro">{project.intro}</p>

            <p className="project-hero__tags">{project.tags.join(' / ')}</p>

            {project.links.length > 0 && (
            <div className="project-hero__links">
                {project.links.map((link) => (
                <a
                    key={link.href}
                    className="project-hero__link"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    {link.label} ↗
                </a>
                ))}
            </div>
            )}
        </header>

            {project.demo && (
            <section className="project-section project-demo" aria-labelledby="demo-title">
                <div className="project-section__head">
                <h2 id="demo-title" className="project-section__title">
                    {project.demo.title ?? 'Demo video'}
                </h2>
                </div>
                <figure className="project-demo__figure">
                <video
                    className="project-demo__video"
                    controls
                    playsInline
                    preload="metadata"
                    poster={project.demo.poster}
                >
                    <source src={project.demo.video} type="video/mp4" />
                    Your browser can’t play this video.{' '}
                    <a href={project.demo.video}>Download it instead</a>.
                </video>
                {project.demo.caption && (
                    <figcaption className="project-demo__caption">{project.demo.caption}</figcaption>
                )}
                </figure>
            </section>
            )}

        {project.sections.map((section, index) => (
            <section key={section.title} className="project-section">
            <div className="project-section__head">
                <span className="project-section__num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="project-section__title">{section.title}</h2>
            </div>
            <div className="project-section__body">
                {section.blocks.map((block, blockIndex) => (
                <Block key={blockIndex} block={block} />
                ))}
            </div>
            </section>
        ))}

        {project.closing && (
            <section className="project-closing">
            <p>{project.closing}</p>
            </section>
        )}

        <nav className="project-next" aria-label="More projects">
            <Link to="/#projects" className="project-next__link">
            <span className="project-next__label">Back to</span>
            <span className="project-next__title">← All projects</span>
            </Link>
            <Link to={`/projects/${next.slug}`} className="project-next__link project-next__link--next">
            <span className="project-next__label">Next project</span>
            <span className="project-next__title">{next.title} →</span>
            </Link>
        </nav>

        <Contact {...profile.contact} />
        </main>
    );
    }