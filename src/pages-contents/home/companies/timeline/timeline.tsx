import React from 'react';

import { ITimelineProps } from './timeline.types';
import Milestone from './milestone';
import styles from './timeline.module.scss';

const Timeline: React.FC<ITimelineProps> = (props) => {
  const { milestones } = props;

  return (
    <div className={styles.timeline}>
      {milestones.map((milestone) => (
        <Milestone key={milestone.companyName} milestone={milestone} />
      ))}
    </div>
  );
};

export default Timeline;
