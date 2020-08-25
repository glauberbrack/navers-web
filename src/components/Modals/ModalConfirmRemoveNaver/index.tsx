/* eslint-disable react/prop-types */
import React from 'react';
import { ModalProps } from 'react-bootstrap';

import Button from '../../Button';

import { Container, Header, Title, Body, Cancel } from './styles';

interface Props extends ModalProps {
  show: boolean;
  onHide: () => void;
  onDelete: () => void;
}

const ModalConfirmRemoveNaver: React.FC<Props> = ({
  show,
  onHide,
  onDelete,
}) => {
  return (
    <Container show={show} backdrop="static" keyboard={false} className="xs">
      <Header>
        <Title>Excluir Naver</Title>
      </Header>
      <Body>
        <p>Tem certeza que deseja excluir este Naver?</p>
        <div>
          <Cancel type="button" onClick={onHide}>
            Cancelar
          </Cancel>
          <Button onClick={onDelete}>Excluir</Button>
        </div>
      </Body>
    </Container>
  );
};

export default ModalConfirmRemoveNaver;
