/* eslint-disable react/prop-types */
import React from 'react';
import { IoMdTrash, IoMdCreate } from 'react-icons/io';
import {
  differenceInYears,
  parseISO,
  differenceInCalendarMonths,
} from 'date-fns';

import { ModalProps } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Header,
  ContentNaver,
  ImageNaver,
  Body,
  NameNaver,
  JobNaver,
  InfoNaver,
  ActionsNaver,
} from './styles';
import { Naver } from '../../../utils/interfaces';

interface Props extends ModalProps {
  naver: Naver;
  show: boolean;
  onHide: () => void;
  onDelete: (id: string) => void;
}

const ModalInfoNaver: React.FC<Props> = ({ show, onHide, naver, onDelete }) => {
  const history = useHistory();

  function handleMoveToEditNaver(id: string) {
    history.push(`/naver/edit/${id}`);
  }

  return (
    <Container
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      className="xs"
    >
      <Header closeButton />
      <Body>
        <ImageNaver>
          <img src={naver.url} alt={naver.name} />
        </ImageNaver>
        <ContentNaver>
          <div>
            <NameNaver>{naver.name}</NameNaver>
            <JobNaver>{naver.job_role}</JobNaver>
            <InfoNaver>
              <p>Idade</p>
              <span>
                {differenceInYears(new Date(), parseISO(naver.birthdate))}
{' '}
anos
</span>
            </InfoNaver>
            <InfoNaver>
              <p>Tempo de empresa</p>
              <span>
                {differenceInCalendarMonths(
                  new Date(),
                  parseISO(naver.admission_date),
                )}
{' '}
                meses
              </span>
            </InfoNaver>
            <InfoNaver>
              <p>Projetos que participou</p>
              <span>{naver.project}</span>
            </InfoNaver>
          </div>
          <ActionsNaver>
            <button type="button" onClick={() => onDelete(naver.id)}>
              <IoMdTrash size={24} />
            </button>
            <button
              type="button"
              onClick={() => handleMoveToEditNaver(naver.id)}
            >
              <IoMdCreate size={24} />
            </button>
          </ActionsNaver>
        </ContentNaver>
      </Body>
    </Container>
  );
};

export default ModalInfoNaver;
