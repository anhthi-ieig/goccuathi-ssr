import React from 'react';
import cx from 'classnames';

import { Icon } from 'components';

import { INavigatorProps } from './navigator.types';
import styles from './navigator.module.scss';

const Navigator: React.FC<INavigatorProps> = (props) => {
  const { icon, name } = props;

  return (
    <div
      role="button"
      tabIndex={0}
      className={cx(styles.navigator, {
        [styles.active]: true,
      })}
    >
      <Icon icon={icon} width="18px" height="18px" className={styles.icon} />
      <span>{name}</span>
    </div>
  );
};

export default Navigator;
