import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;

  form {
    padding: 30px;
    width: 450px;
    height: 410px;
    text-align: center;
    border: 1px solid #212121;

    img {
      padding: 10px;
      margin-bottom: 15px;
      height: 80px;
      width: 62%;
    }

    div {
      margin: 5px 0;
      & + div {
        padding-top: 20px;
      }
    }
  }
`;
