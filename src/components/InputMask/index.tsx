/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import ReactInputMask, { Props as InputPropsMask } from 'react-input-mask';

import { Container, Error, Label } from './styles';

interface InputProps extends InputPropsMask {
  name: string;
  containerStyle?: object;
  label: string;
}

const InputMask: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  label,
  ...rest
}) => {
  const inputRef = useRef<any>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
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
        <ReactInputMask defaultValue={defaultValue} ref={inputRef} {...rest} />
      </Container>
    </div>
  );
};

export default InputMask;
