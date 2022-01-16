import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import { Logo, Icon, modal } from 'components';

import { SectionIds } from '../home.constants';

import Menu from './menu';
import styles from './navigator.module.scss';

const Home: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      window.scrollTo({ top: sectionElement?.offsetTop - 70 });
      modal.close();
    }
  };

  const handleMobileMenuClick = () => {
    modal.open(<Menu mode="in-mobile" scrollToSection={scrollToSection} />);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsFixed(window.scrollY > 65);
    };

    const onResize = () => {
      modal.close();
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  /**
   * Render
   */

  const renderActionIcons = () => (
    <div className={styles.shortIcons}>
      <button type="button" className={styles['mobile-menu']} onClick={handleMobileMenuClick}>
        <Icon icon="function.svg" width="22px" height="22px" />
      </button>
      <button type="button" className={styles['change-theme']}>
        <Icon icon="moon.svg" width="22px" height="22px" />
      </button>
    </div>
  );

  return (
    <div
      id={SectionIds.NAVIGATOR}
      className={cx(styles.navigator, {
        [styles.fixed]: isFixed,
      })}
    >
      <Logo />
      <div className={styles.actions}>
        <Menu mode="in-desktop" scrollToSection={scrollToSection} />
        {renderActionIcons()}
      </div>
    </div>
  );
};

export default Home;
