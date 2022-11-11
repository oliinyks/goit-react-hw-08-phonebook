import css from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
	 <Link to="/contacts">
	 <h1 className={css.title}>Phonebook
	 <span>Phonebook</span>
	 <span>Phonebook</span>
	 <span>perfect for you</span>
	 </h1>
	 </Link>
      <div className={css.imgBox}>
        <img
          className={css.img}
          src="https://cs9.pikabu.ru/post_img/big/2019/11/26/9/1574778059132593317.jpg"
          alt="girl"
        />
        <img
          className={css.img}
          src="https://i.pinimg.com/originals/7a/4f/51/7a4f510d962b4408913832f0de38740b.jpg"
          alt="phone"
        />
      </div>
    </>
  );
}
