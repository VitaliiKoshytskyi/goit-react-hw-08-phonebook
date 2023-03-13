

import css from './HomePage.module.css'

const HomePage = () => {
  


  return (
    <div  className={css.box}>
      <h1 className={css.title} >Welcome to the Phone Book App!</h1>
      <p className={css.text}> This app is designed to help you easily manage and organize your contacts. Whether you're looking to store phone numbers, this app has got you covered. With its user-friendly interface and intuitive features, you'll be able to easily add, edit, and delete contacts as needed. Thank you for choosing Phone Book App!</p>
      
    </div>
  );
};

export default HomePage;

