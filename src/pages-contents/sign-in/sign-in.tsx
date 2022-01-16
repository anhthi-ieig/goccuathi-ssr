import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Logo, Input, Button, Icon } from 'components';

import { SignInFields } from './sign-in.types';
import styles from './sign-in.module.scss';

const SignIn: React.FC = () => {
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      [SignInFields.EMAIL]: '',
      [SignInFields.PASSWORD]: '',
    },
    validationSchema: Yup.object().shape({
      [SignInFields.EMAIL]: Yup.string().required('Required'),
      [SignInFields.PASSWORD]: Yup.string().required('Required'),
    }),
    onSubmit: (formValues) => {
      console.log(formValues);
    },
  });

  const renderWrapper = () => (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <Logo className={styles.logo} />
      <Input
        name={SignInFields.EMAIL}
        label="Email"
        value={values[SignInFields.EMAIL]}
        errorDesc={errors[SignInFields.EMAIL]}
        onChange={handleChange}
      />
      <Input
        type="password"
        name={SignInFields.PASSWORD}
        label="Password"
        value={values[SignInFields.PASSWORD]}
        errorDesc={errors[SignInFields.PASSWORD]}
        onChange={handleChange}
      />
      <Button type="submit" color="primary" className={styles.button} isBlock>
        Sign in
      </Button>
      <p className={styles['or-sign-in-with']}>or sign in with</p>
      <Button className={styles.button} isBlock>
        <Icon icon="facebook.svg" width="18px" height="18px" className={styles.icon} />
        Facebook
      </Button>
      <Button className={styles.button} isBlock>
        <Icon icon="google.svg" width="18px" height="18px" className={styles.icon} />
        Google
      </Button>
    </form>
  );

  return <div className={styles['sign-in']}>{renderWrapper()}</div>;
};

export default SignIn;
