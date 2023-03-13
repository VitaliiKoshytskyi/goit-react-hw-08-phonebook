import RegisterForm from 'components/RegisterForm/RegisterForm';

import css from './RegisterPage.module.css'
const RegisterPage = () => {
  return (
    <div>
      <h1 className={css.title}>Sign Up</h1>
      <p className={css.text}>Register with your valid email address</p>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
