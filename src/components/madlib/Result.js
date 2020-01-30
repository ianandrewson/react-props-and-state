import React from 'react';
import PropTypes from 'prop-types';
import { zoo } from '../../services/madlib';
import styles from '../../containers/Madlib.css';

const Result = ({ words, closeResult }) => (
  <div className={styles.resultContainer}>
    <p className={styles.Result}>{zoo(...words)}</p>
    <button onClick={closeResult}>X</button>
  </div>
);

Result.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  closeResult: PropTypes.func.isRequired
};

export default Result;
