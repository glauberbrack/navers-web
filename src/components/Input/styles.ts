import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  padding: 8px;

  background: var(--color-input);
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
  padding-bottom: 5px;
  display: flex;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: var(--color-text);
`;
