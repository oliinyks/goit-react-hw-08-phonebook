import RegisterForm from 'components/RegisterComponents/RegisterForm'
import css from './Register.module.css'

export default function Register() {
	return (
		<section>
			<h2 className={css.title}>Registration</h2>
			<RegisterForm/>
		</section>
	)
}