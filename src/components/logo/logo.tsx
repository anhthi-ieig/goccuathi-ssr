import React from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';

import { GlobalRoutes } from 'common/constants';

import { ILogoProps } from './logo.types';
import styles from './logo.module.scss';

const Logo: React.FC<ILogoProps> = (props) => {
  const { className } = props;
  const router = useRouter();

  const redirectToHome = () => {
    router.push(GlobalRoutes.HOME);
  };

  return (
    <span
      role="button"
      tabIndex={0}
      className={cx(styles.logo, className)}
      onClick={redirectToHome}
    >
      &lt;goccuathi /&gt;
    </span>
  );
};

export default Logo;
