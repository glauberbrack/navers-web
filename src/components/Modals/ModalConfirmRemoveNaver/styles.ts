import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { shade } from 'polished';
import Button from '../../Button';

export const Container = styled(Modal)`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 576px) {
    .modal-header .close {
      color: var(-color-text);
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
  color: var(-color-text);
`;

export const Body = styled(Modal.Body)`
  padding-left: 30px;

  > p {
    font-size: 16px;
    font-weight: normal;
    line-height: 36px;
    color: var(-color-text);
  }

  > div {
    display: flex;
    justify-content: flex-end;

    button {
      width: 180px;

      & + button {
        margin-left: 15px;
      }
    }
  }
`;

export const Cancel = styled(Button)`
  background: var(--color-background);
  border: 1px solid #212121;
  color: var(--color-text);
  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.05, '#fff')};
  }
`;
