import React, { useEffect, useState } from 'react';

import { Icon } from 'components';

import styles from './go-top.module.scss';

const GoTop: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  const goTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const onScroll = () => {
      setIsShow(window.scrollY > 500);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  /**
   * Render
   */

  if (!isShow) {
    return null;
  }

  return (
    <button type="button" className={styles['go-top']} onClick={goTop}>
      <Icon icon="arrow-up.svg" width="24px" height="24px" className={styles.icon} />
    </button>
  );
};

export default GoTop;
