import { GithubIcon, MailIcon } from './Icons';
import './Contact.css';

export default function Contact({ heading, github, email }) {
  return (
    <section className="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="contact__title">
        {heading}
        <span aria-hidden="true">_</span>
      </h2>
      <div className="contact__buttons">
        <a className="contact__button" href={github} target="_blank" rel="noreferrer">
          <GithubIcon />
          GitHub
        </a>
        <a className="contact__button" href={`mailto:${email}`}>
          <MailIcon />
          Email
        </a>
      </div>
      <p className="contact__email">{email}</p>
    </section>
  );
}
