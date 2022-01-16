import React from 'react';

import { Icon } from 'components';

import SectionTitle from '../section-title';
import { SectionIds } from '../home.constants';

import Timeline from './timeline';
import styles from './companies.module.scss';

const Companies: React.FC = () => {
  const companies = [
    {
      companyName: 'KMS Technology',
      workingTime: '2018-2021',
      projectName: 'HotSchedules',
      techStack: 'ReactJS, NodeJS',
    },
    {
      companyName: 'Logivan',
      workingTime: '2018-2021',
      projectName: 'HotSchedules',
      techStack: 'ReactJS, NodeJS',
    },
  ];

  return (
    <div id={SectionIds.COMPANIES} className={styles.companies}>
      <SectionTitle
        icon="briefcase.svg"
        title="Companies"
        description="I have contributed and left some bugs in"
      />
      <div className={styles['content-wrapper']}>
        <div className={styles['graphic-wrapper']}>
          <Icon icon="working-corner.svg" width="100%" />
        </div>
        <div className={styles['timeline-wrapper']}>
          <Timeline milestones={companies} />
        </div>
      </div>
    </div>
  );
};

export default Companies;
