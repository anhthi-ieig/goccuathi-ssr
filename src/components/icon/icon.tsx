import React from 'react';
import { noop } from 'lodash';
import SVG from 'react-inlinesvg';
import cx from 'classnames';

import { IIconProps } from './icon.types';
import styles from './icon.module.scss';

const Icon: React.FC<IIconProps> = (props) => {
  const { icon, width, height, className, onClick = noop } = props;

  return (
    <span
      role="button"
      tabIndex={0}
      className={cx(styles.icon, className)}
      onClick={() => onClick()}
    >
      <SVG src={`/static/icons/${icon}`} width={width} height={height} />
    </span>
  );
};

export default Icon;
