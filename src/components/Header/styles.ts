import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid #313144;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  > img {
    width: 3rem;
    height: 3rem;
    border-radius: 2rem;
  }

  > button {
    width: 8rem;
    padding: 0 2rem;
    border-radius: 0.3rem;
    background-color: #fed95f;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #313144;

    &:hover {
      background-color: #fdc819;
    }
  }
`;
