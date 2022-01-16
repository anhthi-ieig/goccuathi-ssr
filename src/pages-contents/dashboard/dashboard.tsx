import React from 'react';

import { Icon } from 'components';

import Sidebar from './sidebar';
import Profile from './profile';
import styles from './dashboard.module.scss';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles['side-bar-wrapper']}>
        <Sidebar />
      </div>
      <div className={styles['content-wrapper']}>
        <div className={styles['status-bar']}>
          <Icon icon="chat.svg" className={styles.icon} />
          <Icon icon="pie-chart.svg" className={styles.icon} />
          <Icon icon="settings.svg" className={styles.icon} />
        </div>
        <Profile />
      </div>
    </div>
  );
};

export default Dashboard;
