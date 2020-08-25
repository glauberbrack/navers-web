import styled from 'styled-components';

export const Container = styled.header`
  height: 85px;
  padding: 0 32px;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 150px;
  }

  button {
    display: flex;
    align-items: center;
    background: none;

    p {
      font-size: 14px;
      line-height: 24px;
      font-weight: 600;
    }
  }
`;
