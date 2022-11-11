import LoginForm from 'components/LoginComponents/LoginForm';
import css from './Login.module.css';

export default function Login() {
	return (
		<section>
			<h2 className={css.title}>Login</h2>
			<LoginForm/>
		</section>
	)
}