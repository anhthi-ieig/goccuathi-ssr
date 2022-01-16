import React from 'react';
import cx from 'classnames';
import { noop } from 'lodash';

import { IInputProps } from './input.types';
import styles from './input.module.scss';

const Input: React.FC<IInputProps> = (props) => {
  const {
    type = 'text',
    name,
    label,
    value,
    placeholder,
    disabled = false,
    maxLength,
    rows = 6,
    errorDesc,
    className,
    onChange = noop,
    onBlur = noop,
    isRequired,
  } = props;

  const InputTag = type === 'textarea' ? 'textarea' : 'input';
  const rowsProp = type === 'textarea' ? rows : undefined;
  const maxLengthProps = maxLength || type === 'textarea' ? 800 : 300;

  return (
    <div className={cx(styles['input-wrapper'], className)}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
          {isRequired && <span className={styles.asterisk}>*</span>}
        </label>
      )}
      <InputTag
        name={name}
        value={value}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        maxLength={maxLengthProps}
        rows={rowsProp}
        className={styles.input}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errorDesc && <p className={styles['error-desc']}>{errorDesc}</p>}
    </div>
  );
};

export default Input;
