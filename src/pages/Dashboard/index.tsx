import React, { useEffect, useState, useCallback } from 'react';

import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';

import Button from '../../components/Button';
import CardNaver from '../../components/Card';
import { useNaver } from '../../hooks/NaverContext';
import { Naver } from '../../utils/interfaces';
import ModalConfirmRemoveNaver from '../../components/Modals/ModalConfirmRemoveNaver';
import ModalMessage from '../../components/Modals/ModalMessage';

import { Container, Content, HeaderContent, ListNavers } from './styles';

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [currentDeleteNaver, setCurrentDeleteNaver] = useState('');
  const [
    showMoldaConfirmDeleteNaver,
    setModalShowConfirmDeleteNaver,
  ] = useState(false);

  const [showModalMessage, setShowModalMessage] = useState(false);
  const [navers, setNavers] = useState<Naver[]>([]);

  const history = useHistory();
  const { loadNavers, deleteNaver } = useNaver();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });
  const loadAllNavers = useCallback(async () => {
    const data = await loadNavers();

    setNavers(data);
  }, [loadNavers]);

  useEffect(() => {
    loadAllNavers();
  }, [loadAllNavers]);

  function handleAddNaver() {
    history.push('/naver/create');
  }

  const OpenModalRemoveNaver = useCallback((id: string) => {
    setCurrentDeleteNaver(id);
    setModalShowConfirmDeleteNaver(true);
  }, []);

  const CloseModalRemoveNaver = useCallback(() => {
    setCurrentDeleteNaver('');
    setModalShowConfirmDeleteNaver(false);
  }, []);

  const handleRemoveNaverAndOpenModalMessage = useCallback(async () => {
    setModalShowConfirmDeleteNaver(false);
    await deleteNaver(currentDeleteNaver);
    await loadAllNavers();
    setShowModalMessage(true);
  }, [currentDeleteNaver, deleteNaver, loadAllNavers]);

  const closeModalMessage = useCallback(async () => {
    setShowModalMessage(false);
  }, []);

  return (
    <>
      <Container>
        <Header />

        <Content>
          <HeaderContent>
            <h1>Navers</h1>
            <Button onClick={handleAddNaver}>Adicionar Naver</Button>
          </HeaderContent>
          {isLoading ? (
            'Carregando...'
          ) : (
            <ListNavers>
              {navers.map(naver => (
                <CardNaver
                  key={naver.id}
                  naver={naver}
                  OpenModalRemoveNaver={OpenModalRemoveNaver}
                />
              ))}
            </ListNavers>
          )}
        </Content>
      </Container>
      <ModalConfirmRemoveNaver
        onDelete={handleRemoveNaverAndOpenModalMessage}
        show={showMoldaConfirmDeleteNaver}
        onHide={CloseModalRemoveNaver}
      />
      <ModalMessage
        show={showModalMessage}
        onHide={closeModalMessage}
        title="Naver excluído"
        message="Naver excluído com sucesso"
      />
    </>
  );
};

export default Dashboard;
