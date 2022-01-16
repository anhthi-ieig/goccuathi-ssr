import React from 'react';
import cx from 'classnames';

import Icon from '../icon';

import { IButtonProps } from './button.types';
import styles from './button.module.scss';

const Button: React.FC<IButtonProps> = (props) => {
  const {
    type = 'button',
    color = 'default',
    className,
    children,
    isLoading = false,
    isBlock = false,
  } = props;

  return (
    <button
      type={type}
      className={cx(
        styles.button,
        styles[color],
        {
          [styles.block]: isBlock,
        },
        className
      )}
    >
      {isLoading ? <Icon icon="loading.svg" width="12px" height="12px" /> : children}
    </button>
  );
};

export default Button;
