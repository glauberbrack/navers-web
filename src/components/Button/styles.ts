import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  height: 40px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 30px;
  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.2, '#212121')};
  }
`;
