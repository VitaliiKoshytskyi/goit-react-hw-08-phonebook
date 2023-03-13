import LoginForm from 'components/LoginForm/LoginForm';
import css from './LoginPage.module.css'
const LoginPage = () => {
  return (
    <div>
      <h1 className={css.title}>Sign In</h1>
      <p className={css.text}>Sign in your Registered Account</p>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
