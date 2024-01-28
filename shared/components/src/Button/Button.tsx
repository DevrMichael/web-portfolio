import React from 'react';
import { Button as BootstrapButton, ButtonProps, Spinner } from 'react-bootstrap';
import classnames from 'classnames';
import styles from './Button.module.scss';

interface Props {
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'x-large';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'gray' | 'link';
  fullWidth?: boolean;
  onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  className?: any;
  isLoading?: boolean;
  'data-testid'?: string;
}

const Button = (props: Props & Omit<ButtonProps, 'size'>) => {
  const {
    children,
    icon,
    iconPosition = 'left',
    size = 'medium',
    disabled = false,
    variant = 'primary',
    fullWidth,
    type = 'button',
    onClick,
    isLoading = false,
    className,
    ...buttonProps
  } = props;

  const getVariant = () => {
    if (variant === 'secondary') {
      return 'outline-primary';
    }
    if (variant === 'gray') {
      return 'outline-secondary';
    }

    if (variant === 'link') {
      return 'link';
    }

    return 'primary';
  };

  const handleOnClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    if (isLoading) {
      event.preventDefault();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <BootstrapButton
      className={classnames(styles.button, styles[size], {
        [styles.fullWidth]: fullWidth,
        [className]: !!className,
      })}
      disabled={disabled}
      variant={getVariant()}
      data-testid={props['data-testid']}
      type={type}
      onClick={handleOnClick}
      {...buttonProps}
    >
      {!isLoading && icon && iconPosition === 'left' && (
        <span data-testid="left-icon" className={classnames(styles.icon, styles.left)}>
          {icon}
        </span>
      )}

      {isLoading && (
        <Spinner animation="border" size="sm" className={styles.spinner} data-testid="spinner" />
      )}
      <span data-testid="button-text" className={styles.label}>
        {children}
      </span>

      {!isLoading && icon && iconPosition === 'right' && (
        <span data-testid="right-icon" className={classnames(styles.icon, styles.right)}>
          {icon}
        </span>
      )}
    </BootstrapButton>
  );
};

export default Button;
