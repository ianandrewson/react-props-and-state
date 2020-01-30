import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../containers/Madlib.css';

const Form = ({ onSubmit }) => (
  <div className={styles.formWrapper}>
    <form className={styles.Form} onSubmit={onSubmit}>
      <input type="text" placeholder="adjective" />
      <input type="text" placeholder="noun" />
      <input type="text" placeholder="verb, past tense" />
      <input type="text" placeholder="adverb" />
      <input type="text" placeholder="adjective" />
      <input type="text" placeholder="noun" />
      <input type="text" placeholder="noun" />
      <input type="text" placeholder="adjective" />
      <input type="text" placeholder="verb" />
      <input type="text" placeholder="adverb" />
      <input type="text" placeholder="verb, past tense" />
      <input type="text" placeholder="adjective" />
      <button>Create Madlib</button>
      <button type='reset'>Clear Form</button>
    </form>
  </div>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;
