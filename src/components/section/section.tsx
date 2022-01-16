import React from 'react';

import { ISectionProps } from './section.types';
import styles from './section.module.scss';

const Section: React.FC<ISectionProps> = (props) => {
  const { title, rightElements, children } = props;

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h4 className={styles.title}>{title}</h4>
        <div>{rightElements}</div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Section;
