import React from 'react';
import styles from './Button.module.css';

function Button({ onClick }) {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={onClick}>
        <span>Load More</span>
      </button>
    </div>
  );
}

export default Button;
