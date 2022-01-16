import React, { useMemo } from 'react';
import moment from 'moment';
import { useFormik } from 'formik';
import { Row, Col } from 'react-grid-system';

import { Section, Input, Dropdown, Button } from 'components';
import { IDropDownItem } from 'components/dropdown/dropdown.types';

import { Positions } from './profile.constants';
import { ProfileFields } from './profile.types';
import styles from './profile.module.scss';

const Profile: React.FC = () => {
  const positions = useMemo<IDropDownItem[]>(
    () =>
      Positions.map((position) => ({
        id: position,
        label: position,
        value: position,
      })),
    []
  );

  const { values, handleSubmit } = useFormik({
    initialValues: {
      [ProfileFields.NAME]: '',
      [ProfileFields.EMAIL]: '',
      [ProfileFields.PHONE]: '',
      [ProfileFields.DATE_OF_BIRTH]: moment().subtract(20, 'years'),
      [ProfileFields.POSITION]: positions[0],
      [ProfileFields.LOCATION]: '',
      [ProfileFields.FACEBOOK_URL]: '',
      [ProfileFields.LINKEDIN_URL]: '',
      [ProfileFields.GITHUB_URL]: '',
    },
    onSubmit: () => {},
  });

  return (
    <div className={styles.profile}>
      <Section title="Profile">
        <form onSubmit={handleSubmit}>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <Input label="Name" />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Input label="Name" />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Input label="Facebook Url" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <Input label="Email" />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Dropdown label="Position" items={positions} value={values[ProfileFields.POSITION]} />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Input label="Linkedin Url" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <Input label="Phone" />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Input label="Location" />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Input label="Github Url" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
              <Input type="textarea" label="About me" />
            </Col>
          </Row>
          <div className={styles.actions}>
            <Button color="primary">Save</Button>
          </div>
        </form>
      </Section>
    </div>
  );
};

export default Profile;
