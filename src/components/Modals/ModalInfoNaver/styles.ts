import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const Container = styled(Modal)`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 576px) {
    .modal-header .close {
      color: #212121;
      font-size: 34px;
      padding: 0;
    }

    .modal-dialog {
      max-width: 1080px !important;
      width: 100%;
    }
  }
`;

export const Header = styled(Modal.Header)`
  border-bottom: 0px !important;
  position: absolute;
  top: 5px;
  right: 15px;
  z-index: 1;
`;

export const Title = styled(Modal.Title)`
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  color: var(--color-text);
`;

export const Body = styled(Modal.Body)`
  display: flex;
  padding: 0px;
  font-size: 16px;
  font-weight: normal;
  line-height: 36px;
  color: var(--color-text);
`;

export const ImageNaver = styled.div`
  width: 480px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContentNaver = styled.div`
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NameNaver = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: #000000;
  line-height: 36px;
`;

export const JobNaver = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
`;

export const InfoNaver = styled.div`
  padding-top: 24px;

  p {
    color: var(--color-text);
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }

  span {
    color: var(--color-text);
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ActionsNaver = styled.div`
  display: flex;

  button {
    background: none;

    & + button {
      margin-left: 15px;
    }
  }
`;
