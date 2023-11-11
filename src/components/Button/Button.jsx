import React, { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
  render() {
    return (
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={this.props.onClick}>
          <span>Load More</span>
        </button>
      </div>
    );
  }
}

export default Button;
