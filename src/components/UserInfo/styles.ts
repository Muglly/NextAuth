import styled from 'styled-components';

export const InfoContainer = styled.div`
  position: absolute;
  height: 70%;
  width: 100%;
  border-radius: 20px;
  background-color: var(--Blue);
  padding: 25px;
  color: #fff;

  > img {
    width: 70px;
    border: 2px solid #fff;
    border-radius: 50%;
  }

  > h4 {
    margin-top: 40px;
    font-size: 0.9rem;
    font-weight: normal;
    color: var(--Pale-Blue);
  }

  > h1 {
    font-weight: lighter;
  }

  @media (max-width: 375px) {
    display: flex;
    align-items: center;

    > h4 {
      margin-top: 0;
    }
    > h1 {
      font-size: 24px;
    }
    .infoContainer {
      padding-left: 20px;
    }
  }
`;
