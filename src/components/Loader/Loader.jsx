import React from 'react';
import { Audio } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = ({ isVisible }) => (
  <div
    className={
      isVisible
        ? `${styles.loaderWrapper} ${styles.visible}`
        : styles.loaderWrapper
    }
  >
    <Audio
      height="80"
      width="80"
      radius="9"
      color="red"
      ariaLabel="loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
);

export default Loader;
