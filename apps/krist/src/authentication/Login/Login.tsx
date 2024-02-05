import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { AuthLayout } from '../../layouts';
import styles from './Login.module.scss';
import { Button, TextField } from '@web-portfolio/components';
import { Form } from 'react-bootstrap';

const Login = () => {
  const navigate = useNavigate();

  const phoneRegex = new RegExp(/^\+47\d{8}$/);
  const emailRegex = new RegExp(/^\w+([.-\\+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  const emailOrPhoneRegex = new RegExp(`${phoneRegex.source}|${emailRegex.source}`);

  const schema = yup.object().shape({
    email: yup
      .string()
      .matches(emailOrPhoneRegex, 'Email required')
      .required('Email address required'),
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
          email: '',
          password: '',
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, dirty }) => (
          <Form onSubmit={handleSubmit} className={styles.container}>
            <h1>Welcome</h1>
            <p>Please login here</p>
            <div className={styles.textfieldInputs}>
              <TextField
                type="text"
                label={'Email address'}
                size="large"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                errorText={touched.email ? errors.email : undefined}
                data-testid="email-input"
              />

              <TextField
                type="text"
                label={'Password'}
                size="large"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                errorText={touched.password ? errors.password : undefined}
                data-testid="password-input"
              />

              <div className={styles.inputButtons}>
                <Form.Check
                  type="checkbox"
                  onChange={(e) => console.log(e.target.checked)}
                  data-testid="admin-toggle"
                  label="Remember me"
                  className={styles.checkBox}
                />
                <Button
                  size="medium"
                  variant="link"
                  data-testid="forgot-password-button"
                  className={styles.forgotPassword}
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </Button>
              </div>
            </div>

            <div className={styles.submitButtonContainer}>
              <Button size="x-large" type="submit" fullWidth data-testid="submit-button">
                Login
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default Login;
