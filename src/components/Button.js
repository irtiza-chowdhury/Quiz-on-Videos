import React from 'react';
import classes from '../styles/Button.module.css';

export default function Button({ className, children, ...rest }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={`${className} ${classes.button}`} {...rest}>
      {children}
    </button>
  );
}
