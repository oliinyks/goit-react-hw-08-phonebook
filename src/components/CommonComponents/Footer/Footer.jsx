import css from './Footer.module.css';

export default function Footer() {
  return (
    <div className={css.box}>
      <p>
        &#169; 2022
        <a
		  className={css.link}
          href="https://github.com/oliinyks"
          rel="noreferrer"
          target="_blank"
        >
          Svitlana Oliinyk
        </a>
      </p>
    </div>
  );
};