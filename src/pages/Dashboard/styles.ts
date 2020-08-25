import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  padding: 0 30px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 85px;
  margin-bottom: 30px;

  > h1 {
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
  }

  > button {
    width: 180px;
  }
`;

export const ListNavers = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
`;
