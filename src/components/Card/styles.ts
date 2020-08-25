import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 420px;
  margin: 15px 0;

  img {
    height: 320px;
    width: 100%;
  }
`;

export const Content = styled.button`
  background: none;
  width: 100%;
`;

export const ContentNaver = styled.div`
  text-align: left;
  margin: 10px 0;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  color: var(--color-text);
  padding: 10px 0;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: normal;
  line-height: 18px;
  color: #212121;
`;

export const ActionsNaver = styled.div`
  display: flex;

  button {
    background: var(--color-background);

    & + button {
      margin-left: 20px;
    }
  }
`;
