import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid var(--color-input-border);

  input {
    color: var(--color-text);
    flex: 1;
    border: 0;
    background: transparent;

    &::placeholder {
      color: var(--color-placeholder);
    }
  }
`;

export const Error = styled.p`
  font-size: 14px;
  color: var(--color-error);
  padding-left: 10px;
`;

export const Label = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 14px;
  padding-bottom: 5px;
  display: flex;
`;
