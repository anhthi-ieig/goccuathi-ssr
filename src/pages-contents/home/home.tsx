import React from 'react';

import Navigator from './navigator';
import Intro from './intro';
import Technical from './technical';
import Companies from './companies/companies';
import Contact from './contact';
import GoTop from './go-top/go-top';
import styles from './home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Navigator />
      <Intro />
      <Technical />
      <Companies />
      <Contact />
      <GoTop />
    </div>
  );
};

export default Home;
