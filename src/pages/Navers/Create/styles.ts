import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  max-width: 780px;
  margin-top: 60px;
  width: 100%;

  > form {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    position: relative;

    > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;

      > div {
        width: 360px;
        margin: 10px 0;

        &::placeholder {
          margin-left: 10px;
        }
      }
    }

    > button {
      width: 220px;
    }
  }
`;

export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-bottom: 40px;

  p {
    font-weight: 600;
  }

  svg {
    margin-right: 15px;
  }
`;
