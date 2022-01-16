import React from 'react';

import { IAvatarProps } from './avatar.types';
import styles from './avatar.module.scss';

const Avatar: React.FC<IAvatarProps> = (props) => {
  const { name } = props;
  const matches = name.match(/\b(\w)/g);
  const shortName = matches?.slice(0, 2).join('');

  return (
    <>
      <div className={styles.avatar}>{shortName}</div>
      <p className={styles.name}>{name}</p>
    </>
  );
};

export default Avatar;
