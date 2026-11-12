    import Hero from '../components/Hero/Hero';
    import Experience from '../components/Experience/Experience';
    import Education from '../components/Education/Education';
    import Projects from '../components/Projects/Projects';
    import Skills from '../components/Skills/Skills';
    import Contact from '../components/Contact/Contact';

    import { profile } from '../data/profile';
    import { experience } from '../data/experience';
    import { education } from '../data/education';
    import { projects } from '../data/projects';
    import { skills } from '../data/skills';

    // The home page: everything that used to be in App.jsx.
    export default function Home() {
    return (
        <main>
        <Hero {...profile.hero} />
        <Projects items={projects} />
        <Experience items={experience} />
        <Education items={education} />
        <Skills groups={skills} />
        <Contact {...profile.contact} />
        </main>
    );
    }