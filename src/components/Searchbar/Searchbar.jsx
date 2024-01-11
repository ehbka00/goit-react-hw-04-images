import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './searchbar.module.css';

const Searchbar = props => {
  const handleSubmit = event => {
    event.preventDefault();
    const query = event.currentTarget.lastChild.value;

    if (query === '') {
      toast.error('The search field should not be empty.', {
        position: toast.POSITION.TOP_LEFT,
      });
      return;
    }
    props.onSubmit(query);
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button className={styles.button} type="submit">
          <span className={styles.button_label}></span>
        </button>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
