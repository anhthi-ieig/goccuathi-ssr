import React, { useMemo } from 'react';
// import ScrollReveal from 'scrollreveal';

import { Button, Icon } from 'components';

import SectionTitle from '../section-title';
import { SectionIds } from '../home.constants';

import Stack from './stack';
import styles from './technical.module.scss';

const Technical: React.FC = () => {
  const stacks = useMemo(
    () => [
      {
        icon: 'html5.svg',
        title: 'HTML5/CSS3',
        details: [
          'Understand Javascript principles likes Event Loop, Closure, Scoping...',
          'Worked with Typescript, ES5/ES6, LESS/SASS, flexbox...',
          'Worked with Ant Design, Material UI or develop UI components from scratch',
        ],
      },
      {
        icon: 'reactjs.svg',
        title: 'ReactJS',
        details: [
          'Worked with Server Side Rendering(SSR) using NextJS',
          'Worked with micro-frontends using Module Federation',
          'Worked with Progressive Web App',
        ],
      },
      {
        icon: 'nodejs.svg',
        title: 'NodeJS',
        details: [
          'Develop NodeJS Restful APIs with Express, Hapi to integrate with MongoDB',
          'Caching data with Redis',
        ],
      },
      {
        icon: 'aws.svg',
        title: 'AWS',
        details: [
          'Launch an application in Amazon Lightsail, Cloudfront and NGINX',
          'Worked with Google Contact APIs',
        ],
      },
      {
        icon: 'webpack.svg',
        title: 'Webpack',
        details: [
          'Launch an application in Amazon Lightsail, Cloudfront and NGINX',
          'Worked with Google Contact APIs',
        ],
      },
      {
        icon: 'jest.svg',
        title: 'Jest/Enzyme',
        details: [
          'Launch an application in Amazon Lightsail, Cloudfront and NGINX',
          'Worked with Google Contact APIs',
        ],
      },
    ],
    []
  );

  // useEffect(() => {
  //   ScrollReveal({
  //     distance: '40px',
  //     duration: 2000,
  //   }).reveal(`.${styles.downloadCv}`, {
  //     origin: 'top',
  //   });
  // }, []);

  return (
    <div id={SectionIds.TECHNICAL} className={styles.technical}>
      <SectionTitle
        icon="terminal.svg"
        title="Technical"
        description="Build a great product with technologies like"
        isInDarkBg
      />
      <div className={styles['stack-wrapper']}>
        {stacks.map((stack) => (
          <Stack key={stack.title} icon={stack.icon} title={stack.title} details={stack.details} />
        ))}
      </div>
      <div className={styles['download-cv']}>
        <Button color="primary">
          Download CV
          <Icon icon="cloud-download.svg" width="20px" height="20px" />
        </Button>
      </div>
    </div>
  );
};

export default Technical;
