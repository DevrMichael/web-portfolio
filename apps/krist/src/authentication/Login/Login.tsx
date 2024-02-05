import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { AuthLayout } from '../../layouts';
import styles from './Login.module.scss';
import { Button, Form, TextField } from '@web-portfolio/components';

const Login = () => {
  const navigate = useNavigate();

  const phoneRegex = new RegExp(/^\+47\d{8}$/);
  const emailRegex = new RegExp(/^\w+([.-\\+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  const emailOrPhoneRegex = new RegExp(`${phoneRegex.source}|${emailRegex.source}`);

  const schema = yup.object().shape({
    username: yup.string().matches(emailOrPhoneRegex, 'Email required').required('Email required'),
    password: yup.string().required('Password required').min(8, 'Minimum 8 characters required'),
  });

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <AuthLayout>
      <Formik
        validationSchema={schema}
        onSubmit={() => {
          console.log('Form submitted');
        }}
        initialValues={{
          username: '',
          password: '',
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, dirty }) => (
          <Form title={'Welcome'} description={'Please log in here'} onSubmit={handleSubmit}>
            <TextField
              type="text"
              label={'Test'}
              size="large"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              errorText={touched.username ? errors.username : undefined}
              data-testid="username-input"
            />

            <div className={styles.buttonContainer}>
              <Button
                size="x-large"
                type="submit"
                fullWidth
                disabled={!(isValid && dirty)}
                data-testid="submit-button"
              >
                Button
              </Button>

              <Button
                size="large"
                variant="link"
                data-testid="forgot-password-button"
                className={styles.forgotPassword}
                onClick={handleForgotPassword}
              >
                Button
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default Login;
