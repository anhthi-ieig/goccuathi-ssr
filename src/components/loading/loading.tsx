import React, { useState } from 'react';
import cx from 'classnames';
import { noop } from 'lodash';

import { ILoadingProps, ICloseConfig } from './loading.types';
import styles from './loading.module.scss';

const loading = {
  show: noop,
  hide: noop,
};

const Loading: React.FC<ILoadingProps> = (props) => {
  const { isLoading = false } = props;
  const [isActive, setIsActive] = useState(isLoading);

  loading.show = () => {
    setIsActive(true);
  };

  loading.hide = (config: ICloseConfig) => {
    const { scrollTo } = config;
    setIsActive(false);

    if (typeof scrollTo === 'number' && window) {
      window.scrollTo({ top: scrollTo });
    }
  };

  return (
    <div
      className={cx(styles.overlay, {
        [styles.active]: isActive,
      })}
    >
      <div
        className={cx(styles.loading, {
          [styles.active]: isActive,
        })}
      />
    </div>
  );
};

export { loading as default, Loading };
