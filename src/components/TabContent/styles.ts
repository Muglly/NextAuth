import styled from 'styled-components';

export const Container = styled.div`
  .tabContent {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100%;
    justify-content: space-between;
  }
  @media (max-width: 375px) {
    .tabContent.active {
      display: flex;
      flex-direction: column;
    }
  }
`;
