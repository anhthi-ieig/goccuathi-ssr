import React from 'react';
// import ScrollReveal from 'scrollreveal';

import { IMilestoneProps } from './milestone.types';
import styles from './milestone.module.scss';

const MileStone: React.FC<IMilestoneProps> = (props) => {
  const {
    milestone: { companyName, workingTime, projectName, techStack },
  } = props;

  // useEffect(() => {
  //   ScrollReveal({
  //     distance: '30px',
  //     duration: 2000,
  //     delay: 200,
  //   }).reveal(`.${styles.milestone}, .${styles.detailSection}`, {
  //     origin: 'bottom',
  //     interval: 200,
  //   });
  // }, []);

  return (
    <div className={styles.milestone}>
      <h4 className={styles.companyName}>{companyName}</h4>
      <span className={styles.dot} />
      <div className={styles.milestone}>
        <div className={styles['type-section']}>
          <p className={styles.type}>Working time</p>
          <p className={styles.type}>Project detail</p>
          <p className={styles.type}>Technologies</p>
          <p className={styles.type}>Team size</p>
        </div>
        <div className={styles['detail-section']}>
          <p className={styles.detail}>{workingTime}</p>
          <p className={styles.detail}>{projectName}</p>
          <p className={styles.detail}>{techStack}</p>
          <p className={styles.detail}>{techStack}</p>
        </div>
      </div>
    </div>
  );
};

export default MileStone;
