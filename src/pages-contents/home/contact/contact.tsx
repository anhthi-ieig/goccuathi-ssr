import React from 'react';

import { Icon } from 'components';

import SectionTitle from '../section-title';
import { SectionIds } from '../home.constants';

import { IContact } from './contact.types';
import styles from './contact.module.scss';

const Contact: React.FC = () => {
  const renderContact = (props: IContact) => {
    const { icon, type, value } = props;

    return (
      <div className={styles.contact}>
        <Icon icon={icon} width="26px" height="26px" className={styles.icon} />
        <span className={styles.info}>
          <h4 className={styles.type}>{type}</h4>
          <small className={styles.value}>{value}</small>
        </span>
      </div>
    );
  };

  return (
    <div id={SectionIds.CONTACT} className={styles['contact-me']}>
      <SectionTitle
        icon="user-smile.svg"
        title="Contact me"
        description="Keep in touch with me via"
      />
      <div className={styles['keep-in-touch']}>
        <div className={styles.contacts}>
          {renderContact({
            icon: 'phone.svg',
            type: 'Call me',
            value: '+84 342 777 610',
          })}
          {renderContact({
            icon: 'mail.svg',
            type: 'Email',
            value: 'anhthi-ieig@gmail.com',
          })}
          {renderContact({
            icon: 'map-pin.svg',
            type: 'Location',
            value: 'District 7, HCMC, Vietnam',
          })}
        </div>
        <div className={styles['send-message']}>Submit form</div>
      </div>
    </div>
  );
};

export default Contact;
