import React from 'react';

import { DashboardTabs } from '../dashboard.types';

import Avatar from './avatar/avatar';
import Navigator from './navigator';
import styles from './sidebar.module.scss';

const Sidebar: React.FC = () => {
  const navigators = [
    { icon: 'user.svg', name: 'Profile', route: DashboardTabs.PROFILE },
    { icon: 'terminal.svg', name: 'Technical', route: DashboardTabs.TECHNICAL },
    { icon: 'briefcase.svg', name: 'Companies', route: DashboardTabs.COMPANIES },
    { icon: 'gamepad.svg', name: 'Hobbies', route: DashboardTabs.HOBBIES },
    { icon: 'compass.svg', name: 'Discover', route: DashboardTabs.DISCOVER },
  ];

  return (
    <div className={styles.sidebar}>
      <Avatar name="Jarvis Nguyen" url="" />
      <div className={styles['navigator-wrapper']}>
        {navigators.map((navigator) => (
          <Navigator
            key={navigator.name}
            icon={navigator.icon}
            name={navigator.name}
            route={navigator.route}
          />
        ))}
      </div>
      <span role="button" tabIndex={0} className={styles['back-to-home']}>
        Back to home
      </span>
    </div>
  );
};

export default Sidebar;
