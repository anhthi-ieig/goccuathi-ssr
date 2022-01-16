import React, { ReactNode, useState } from 'react';
import cx from 'classnames';
import { noop } from 'lodash';

import Icon from '../icon';

import styles from './modal.module.scss';

const modal = {
  open: noop,
  close: noop,
};

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>();

  modal.open = (content: ReactNode) => {
    setIsOpen(true);
    setModalContent(content);
  };

  modal.close = () => {
    setIsOpen(false);
    setModalContent(undefined);
  };

  return (
    <div
      className={cx(styles.overlay, {
        [styles.open]: isOpen,
      })}
    >
      <div className={styles['modal-wrapper']}>
        <span role="button" tabIndex={0} className={styles.close} onClick={modal.close}>
          <Icon icon="close-line.svg" width="12px" height="12px" />
        </span>
        {modalContent}
      </div>
    </div>
  );
};

export { modal as default, Modal };
