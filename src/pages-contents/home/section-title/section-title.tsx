import React from 'react';
import cx from 'classnames';

import { Icon } from 'components';

import { ISectionTitleProps } from './section-title.types';
import styles from './section-title.module.scss';

const SectionTitle: React.FC<ISectionTitleProps> = (props) => {
  const { icon, title, description, isInDarkBg } = props;

  return (
    <div
      className={cx(styles['section-title'], {
        [styles['in-dark-bg']]: isInDarkBg,
      })}
    >
      <div className={styles.title}>
        <Icon icon={icon} width="24px" height="24px" />
        <h2>{title}</h2>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default SectionTitle;
