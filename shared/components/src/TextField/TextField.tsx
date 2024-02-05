/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react';
import { Form as B_Form, FormControlProps } from 'react-bootstrap';
import classnames from 'classnames';
import styles from './TextField.module.scss';

interface Props {
  name?: string;
  size?: 'medium' | 'large';
  label?: string;
  type?: 'text' | 'email' | 'password' | 'search' | 'number';
  hint?: string;
  errorText?: string;
  required?: boolean;
  textArea?: boolean;
  rows?: number;
  icon?: React.ReactNode;
  autocomplete?: boolean;
  maxLength?: number;
}

const TextField = React.forwardRef((props: Props & Omit<FormControlProps, 'size'>, ref) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);
  const {
    size = 'medium',
    type = 'text',
    label,
    required,
    autocomplete = true,
    textArea,
    rows = 4,
    hint,
    icon,
    name,
    errorText,
    maxLength,
    ...otherProps
  } = props;

  useEffect(() => {
    document.addEventListener('keydown', checkCapsLock);
    document.addEventListener('keyup', checkCapsLock);
  }, []);

  const getSize = () => {
    if (size == 'large') {
      return 'lg';
    }

    return undefined;
  };

  const togglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const checkCapsLock = (event: globalThis.KeyboardEvent) => {
    if (event.getModifierState && event.getModifierState('CapsLock')) {
      setIsCapsLockOn(true);
    } else {
      setIsCapsLockOn(false);
    }
  };

  const handleWheel = (event: React.WheelEvent<HTMLInputElement>) => {
    if ((event.target as HTMLInputElement).type === 'number') {
      (event.target as HTMLInputElement).blur();
    }
  };

  return (
    <B_Form.Group
      data-testid={`textfield-${getSize() === 'lg' ? 'lg' : 'md'}`}
      className={styles.inputGroup}
    >
      {label && (
        <B_Form.Label>
          <span data-testid="textfield-label">{label}</span>

          {required && <span data-testid="textfield-label-required">*</span>}
        </B_Form.Label>
      )}

      <div className={styles.inputContainer}>
        {icon && (
          <span className={styles.decorationIcon} data-testid="decoration-icon">
            {icon}
          </span>
        )}

        {textArea ? (
          <B_Form.Control
            {...(autocomplete ? {} : { autoComplete: 'nope' })}
            {...otherProps}
            type={passwordVisible ? 'text' : type}
            size={getSize()}
            className={classnames(styles.input, { [styles.hasDecorationIcon]: !!icon })}
            name={name}
            id={name}
            {...(textArea ? { as: 'textarea' } : { as: 'input' })}
            {...(textArea ? { rows } : {})}
            {...(maxLength ? { maxLength } : {})}
            isInvalid={!!errorText}
            onWheel={handleWheel}
          />
        ) : (
          <B_Form.Control
            {...(autocomplete ? {} : { autoComplete: 'nope' })}
            {...otherProps}
            type={passwordVisible ? 'text' : type}
            size={getSize()}
            className={classnames(styles.input, { [styles.hasDecorationIcon]: !!icon })}
            name={name}
            id={name}
            ref={ref}
            {...(maxLength ? { maxLength } : {})}
            isInvalid={!!errorText}
            onWheel={handleWheel}
          />
        )}
      </div>

      {errorText && (
        <B_Form.Text className={styles.errorMessage}>
          <span data-testid="textfield-error-text">{errorText}</span>
        </B_Form.Text>
      )}

      {hint && (
        <B_Form.Text className={styles.hint}>
          <span data-testid="textfield-hint">{hint}</span>
        </B_Form.Text>
      )}
    </B_Form.Group>
  );
});
TextField.displayName = 'TextField';

export default TextField;
