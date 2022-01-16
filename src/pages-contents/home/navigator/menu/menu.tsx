import React from 'react';
import cx from 'classnames';

import { SectionIds } from '../../home.constants';

import { IMenuProps } from './menu.types';
import { MenuMode } from './menu.constants';
import styles from './menu.module.scss';

const Menu: React.FC<IMenuProps> = (props) => {
  const { mode, scrollToSection } = props;

  return (
    <span
      className={cx(styles.menu, {
        [styles.inDesktop]: mode === MenuMode.IN_DESKTOP,
        [styles.inMobile]: mode === MenuMode.IN_MOBILE,
      })}
    >
      <button
        type="button"
        className={styles['menu-item']}
        onClick={() => scrollToSection(SectionIds.INTRO)}
      >
        Intro
      </button>
      <button
        type="button"
        className={styles['menu-item']}
        onClick={() => scrollToSection(SectionIds.TECHNICAL)}
      >
        Technical
      </button>
      <button
        type="button"
        className={styles['menu-item']}
        onClick={() => scrollToSection(SectionIds.COMPANIES)}
      >
        Companies
      </button>
      <button
        type="button"
        className={styles['menu-item']}
        onClick={() => scrollToSection(SectionIds.CONTACT)}
      >
        Contact
      </button>
    </span>
  );
};

export default Menu;
