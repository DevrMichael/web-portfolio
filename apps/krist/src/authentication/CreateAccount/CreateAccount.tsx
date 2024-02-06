import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { AuthLayout } from '../../layouts';
import styles from './CreateAccount.module.scss';
import { Button, TextField } from '@web-portfolio/components';
import { Form } from 'react-bootstrap';

const CreateAccount = () => {
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
    firstName: yup.string().required('First name required'),
    lastName: yup.string().required('Last name required'),
  });

  const handleSignupSubmit = () => {
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
          password: '',
          firstName: '',
          lastName: '',
        }}
      >
        {({ handleChange, handleBlur, values, touched, errors }) => (
          <Form onSubmit={handleSignupSubmit} className={styles.container}>
            <h1>Create New Account</h1>
            <p>Please enter details</p>
            <div className={styles.textfieldInputs}>
              <TextField
                type="text"
                label={'First Name'}
                size="large"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                errorText={touched.firstName ? errors.firstName : undefined}
                data-testid="firstName-input"
              />

              <TextField
                type="text"
                label={'Last Name'}
                size="large"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                errorText={touched.lastName ? errors.lastName : undefined}
                data-testid="lastName-input"
              />

              <TextField
                type="text"
                label={'Email Address'}
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
                  label={
                    <>
                      I agree to the{' '}
                      <span className={styles.termsAndConditionsSpan}>Terms & Conditions</span>
                    </>
                  }
                  className={styles.checkBox}
                />
              </div>
            </div>

            <div className={styles.submitButtonContainer}>
              <Button size="x-large" type="submit" fullWidth data-testid="submit-button">
                Signup
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default CreateAccount;
