import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { AuthLayout } from '../../layouts';
import styles from './ForgotPassword.module.scss';
import { Button, TextField } from '@web-portfolio/components';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const emailRegex = new RegExp(/^\w+([.-\\+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);

  const schema = yup.object().shape({
    email: yup.string().matches(emailRegex, 'Email required').required('Email address required'),
  });

  const handleGoBackButtonClick = () => {
    navigate('/login');
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
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, dirty }) => (
          <Form onSubmit={handleSubmit} className={styles.container}>
            <div className={styles.goBackButtonContainer}>
              <FontAwesomeIcon icon={faChevronLeft} />
              <Button
                size="medium"
                variant="link"
                data-testid="go-back-button"
                className={styles.goBackButton}
                onClick={handleGoBackButtonClick}
              >
                Back
              </Button>
            </div>
            <h1>Forgot Password</h1>
            <p>
              Enter your registered email address. We'll send you a code to reset your password.
            </p>
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
            </div>

            <div className={styles.submitButtonContainer}>
              <Button size="x-large" type="submit" fullWidth data-testid="submit-button">
                Send OTP
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default ForgotPassword;
