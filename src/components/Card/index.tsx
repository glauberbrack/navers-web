/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react';

import { IoMdTrash, IoMdCreate } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import {
  Container,
  ActionsNaver,
  Content,
  ContentNaver,
  Title,
  Description,
} from './styles';
import ModalInfoNaver from '../Modals/ModalInfoNaver';
import { Naver } from '../../utils/interfaces';

interface Props {
  naver: Naver;
  OpenModalRemoveNaver: (id: string) => void;
}

const Card: React.FC<Props> = ({ naver, OpenModalRemoveNaver }) => {
  const [modalShow, setModalShow] = useState(false);
  const history = useHistory();

  function closeModal() {
    setModalShow(false);
  }

  function openModal() {
    setModalShow(true);
  }

  function handleMoveToEditNaver(id: string) {
    history.push(`/naver/edit/${id}`, { naver_id: id });
  }

  const handleExcludeNaverAndCloseModalInfo = useCallback(
    (id: string) => {
      closeModal();
      OpenModalRemoveNaver(id);
    },
    [OpenModalRemoveNaver],
  );

  return (
    <>
      <Container>
        <Content onClick={openModal}>
          <img src={naver.url} alt={naver.name} />
          <ContentNaver>
            <Title>{naver.name}</Title>
            <Description>{naver.job_role}</Description>
          </ContentNaver>
        </Content>
        <ActionsNaver>
          <button onClick={() => OpenModalRemoveNaver(naver.id)} type="button">
            <IoMdTrash size={24} />
          </button>
          <button onClick={() => handleMoveToEditNaver(naver.id)} type="button">
            <IoMdCreate size={24} />
          </button>
        </ActionsNaver>
      </Container>
      <ModalInfoNaver
        naver={naver}
        show={modalShow}
        onHide={closeModal}
        onDelete={handleExcludeNaverAndCloseModalInfo}
      />
    </>
  );
};

export default Card;
