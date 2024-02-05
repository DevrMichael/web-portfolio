import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from './AuthLayout.module.scss';

interface Props {
  children: React.ReactNode;
}

const AuthLayout = (props: Props) => {
  const { children } = props;

  return (
    <Container fluid className={styles.container}>
      <Row className={styles.row}>
        <Col lg={6} className={styles.imageView}>
          <div className={styles.heroImage} data-testid="hero-image"></div>
        </Col>
        <Col lg={6} className={styles.formContainer}>
          <div className={styles.formContent}>{children}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthLayout;
