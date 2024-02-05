import React, { DetailedHTMLProps, FormHTMLAttributes } from 'react';
import { Form as B_Form } from 'react-bootstrap';
import styles from './Form.module.scss';

interface Props extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  children: React.ReactNode;
  title: string;
  description?: React.ReactNode;
  image?: string;
  onSubmit?: (event?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

const Form = (props: Props) => {
  const { children, title, description, image, onSubmit } = props;

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement> | undefined) => {
    event?.preventDefault();
    event?.stopPropagation();

    if (onSubmit) {
      onSubmit(event);
    }
  };

  return (
    <B_Form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.header}>
        <div>
          <h3 className={styles.heading} data-testid="form-title">
            {title}
          </h3>
          {description && (
            <span data-testid="form-description" className={styles.description}>
              {description}
            </span>
          )}
        </div>

        {image && (
          <img src={image} data-testid="form-image" className={styles.illustration} alt="welcome" />
        )}
      </div>

      <div className={styles.content}>{children}</div>
    </B_Form>
  );
};

export default Form;
