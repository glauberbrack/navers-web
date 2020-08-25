/* eslint-disable react/prop-types */
import React from 'react';

import { ModalProps } from 'react-bootstrap';
import { Container, Header, Title, Description } from './styles';

interface Props extends ModalProps {
  title: string;
  message: string;
  show: boolean;
  onHide: () => void;
}

const ModalMessage: React.FC<Props> = ({ show, onHide, title, message }) => {
  return (
    <Container
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      className="xs"
    >
      <Header closeButton>
        <Title>{title}</Title>
      </Header>
      <Description>{message}</Description>
    </Container>
  );
};

export default ModalMessage;
