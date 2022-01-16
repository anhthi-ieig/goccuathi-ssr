import React from 'react';
// import ScrollReveal from 'scrollreveal';

import { Button, Icon } from 'components';

import { SectionIds } from '../home.constants';

import styles from './intro.module.scss';

const Intro: React.FC = () => {
  const scrollDown = () => {
    const technicalElement = document.getElementById(SectionIds.TECHNICAL);

    if (technicalElement) {
      window.scrollTo({ top: technicalElement?.offsetTop - 70 });
    }
  };

  // useEffect(() => {
  //   ScrollReveal({
  //     distance: '40px',
  //     duration: 3000,
  //   }).reveal(`.${styles.iam}, .${styles.avatar}`, {
  //     origin: 'top',
  //   });

  //   ScrollReveal({
  //     distance: '40px',
  //     duration: 2000,
  //     delay: 500,
  //   }).reveal(`.${styles.socialNetworks}, .${styles.scrollDown}`, {
  //     origin: 'left',
  //   });
  // }, []);

  /**
   * Render
   */

  const renderSocialNetworks = () => (
    <div className={styles['social-networks']}>
      <a href="/" className={styles.network} target="_blank">
        <Icon icon="facebook.svg" width="22px" height="22px" />
      </a>
      <a href="/" className={styles.network} target="_blank">
        <Icon icon="linkedin.svg" width="22px" height="22px" />
      </a>
      <a href="/" className={styles.network} target="_blank">
        <Icon icon="github.svg" width="22px" height="22px" />
      </a>
      <span role="button" className={styles.network}>
        <Icon icon="mail.svg" width="22px" height="22px" />
      </span>
      <span role="button" className={styles.network}>
        <Icon icon="phone.svg" width="22px" height="22px" />
      </span>
    </div>
  );

  const renderIam = () => {
    const nameAndPositionElements = (
      <>
        <h1 className={styles.name}>Hi, I am Thi Nguyen</h1>
        <h3 className={styles.position}>Senior Developer</h3>
      </>
    );

    const descriptionElement = (
      <p className={styles.detail}>
        “Integrity, Emotion, Innovation and Give” are four key lifestyles I always chase. I’m Thi
        Nguyen, a senior full-stack developer who has 5 years of experience in web development. To
        me, every line of code must be scalable, optimized, and easy to read. I believe we are not
        only developers but also owners of a product who understand and bring solutions to solve
        customer problems.
      </p>
    );

    const contactMeElement = (
      <Button color="primary" className={styles['read-more']}>
        Read more &nbsp;&nbsp;
        <Icon icon="stylized-arrow-right.svg" width="14px" height="14px" />
      </Button>
    );

    return (
      <div className={styles.iam}>
        {nameAndPositionElements}
        {descriptionElement}
        {contactMeElement}
      </div>
    );
  };

  const renderAvatar = () => (
    <div className={styles.avatar}>
      <img src="/src/assets/images/avatar.png" alt="Thi Nguyen" />
    </div>
  );

  const renderScrollDown = () => (
    <div role="button" tabIndex={0} className={styles['scroll-down']} onClick={scrollDown}>
      <Icon icon="scroll-mouse.svg" width="28px" height="38px" />
      &nbsp; Scroll down &nbsp;
      <span className={styles.arrow}>
        <Icon icon="arrow-down.svg" width="20px" height="24px" />
      </span>
    </div>
  );

  return (
    <div id={SectionIds.INTRO} className={styles.intro}>
      <div className={styles.personal}>
        {renderSocialNetworks()}
        {renderIam()}
        {renderAvatar()}
      </div>
      {renderScrollDown()}
    </div>
  );
};

export default Intro;
