import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const Container = styled(Modal)`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 576px) {
    .modal-header .close {
      color: var(--color-text);
      font-size: 34px;
    }

    .modal-dialog {
      max-width: 780px !important;
      width: 100%;
    }
  }
`;

export const Header = styled(Modal.Header)`
  border-bottom: 0px !important;
  padding-left: 30px;
`;

export const Title = styled(Modal.Title)`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: var(--color-text);
`;

export const Description = styled(Modal.Body)`
  padding-left: 30px;
  font-size: 16px;
  font-weight: normal;
  line-height: 36px;
  color: var(--color-text);
`;
