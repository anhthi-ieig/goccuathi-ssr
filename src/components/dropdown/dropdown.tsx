import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { noop } from 'lodash';

import Icon from '../icon';

import { IDropDownItem, IDropdownProps } from './dropdown.types';
import styles from './dropdown.module.scss';

const Dropdown: React.FC<IDropdownProps> = (props) => {
  const {
    name,
    value,
    items,
    label,
    errorDesc,
    placement = 'bottom',
    className,
    onChange = noop,
    isRequired,
  } = props;

  const selectedOptionRef = useRef<HTMLDivElement>(null);
  const overlayOptionsRef = useRef<HTMLDivElement>(null);
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const toggleOptions = () => setIsOpenOptions(!isOpenOptions);

  const handleChange = (item: IDropDownItem) => {
    onChange(item);
    setIsOpenOptions(false);
  };

  const handleClickOutside = (event: Event) => {
    if (
      overlayOptionsRef.current &&
      selectedOptionRef.current &&
      !selectedOptionRef.current.contains(event.target as HTMLElement) &&
      !overlayOptionsRef.current.contains(event.target as HTMLElement)
    ) {
      setIsOpenOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  /**
   * Render
   */

  const renderLabel = () =>
    label && (
      <label htmlFor={name} className={styles.label}>
        {label}
        {isRequired && <span className={styles.asterisk}>*</span>}
      </label>
    );

  const renderSelectedOption = () => (
    <div
      role="button"
      tabIndex={0}
      ref={selectedOptionRef}
      className={cx(styles['selected-option'], {
        [styles.open]: isOpenOptions,
      })}
      onClick={toggleOptions}
    >
      <div className={styles.content}>{value?.label}</div>
      <div className={styles.arrow}>
        <Icon icon="arrow-head-down.svg" width="18px" height="18px" />
      </div>
    </div>
  );

  const renderOverlayOptions = () => {
    const displayItems = placement === 'top' ? items.reverse() : items;

    return (
      <div
        ref={overlayOptionsRef}
        className={cx(styles['overlay-options'], {
          [styles.open]: isOpenOptions,
          [styles[placement]]: placement,
        })}
      >
        <ul>
          {displayItems.map((item) => (
            <li key={item.id}>
              <div
                role="button"
                tabIndex={0}
                className={styles.option}
                onClick={() => {
                  handleChange(item);
                }}
              >
                {item.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={cx(styles.dropdown, className)}>
      {renderLabel()}
      {placement === 'top' && renderOverlayOptions()}
      {renderSelectedOption()}
      {placement === 'bottom' && renderOverlayOptions()}
      {errorDesc && <p className={styles['error-desc']}>{errorDesc}</p>}
    </div>
  );
};

export default Dropdown;
