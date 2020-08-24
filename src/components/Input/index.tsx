import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container, Error, Label } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: object;
  label: string;
}

const Input: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  label,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <Label>
        {label}
{' '}
{error && <Error>{error}</Error>}
      </Label>
      <Container style={containerStyle}>
        <input defaultValue={defaultValue} ref={inputRef} {...rest} />
      </Container>
    </div>
  );
};

export default Input;
