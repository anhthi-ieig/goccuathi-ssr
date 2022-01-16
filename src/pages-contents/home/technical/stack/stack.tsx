import React, { useState } from 'react';
import cx from 'classnames';
// import ScrollReveal from 'scrollreveal';

import { Icon } from 'components';

import { IStackProps } from './stack.types';
import styles from './stack.module.scss';

const Stack: React.FC<IStackProps> = (props) => {
  const { icon, title, details } = props;
  const [isCollapse, setIsCollapse] = useState(true);

  const toggleSection = () => setIsCollapse(!isCollapse);

  // useEffect(() => {
  //   ScrollReveal({
  //     distance: '40px',
  //     duration: 2000,
  //   }).reveal(`.${styles.stack}`, {
  //     origin: 'top',
  //     interval: 200,
  //   });
  // }, []);

  return (
    <div className={styles.stack}>
      <div role="button" tabIndex={0} className={styles.header} onClick={toggleSection}>
        <div className={styles['icon-and-title']}>
          <Icon icon={icon} width="24px" height="24px" className={styles.icon} />
          <h3 className={styles.title}>{title}</h3>
        </div>
        <Icon
          icon="arrow-head-up.svg"
          width="20px"
          height="20px"
          className={cx(styles['toggle-icon'], {
            [styles.rotate]: isCollapse,
          })}
        />
      </div>
      <div
        className={cx(styles.details, {
          [styles.collapse]: isCollapse,
        })}
      >
        {details.map((detail) => (
          <p key={detail} className={styles.detail}>
            {'- '}
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Stack;
