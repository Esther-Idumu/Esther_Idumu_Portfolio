import portrait from '../../assets/esther-portrait.webp';
import './Hero.css';

// Reads from profile.hero in src/data/profile.js:
// left.name + right.name -> the big centred name, right.title -> the line under it.
export default function Hero({ left, right, photoAlt }) {
  return (
    <header className="hero">
      <div className="hero__text">
        <h1 className="hero__name">
          <span>{left.name}</span>
          <span>{right.name}</span>
        </h1>
        <p className="hero__title">{right.title}</p>
      </div>

      <figure className="hero__figure">
        <img className="hero__photo" src={portrait} alt={photoAlt} />
      </figure>
    </header>
  );
}
