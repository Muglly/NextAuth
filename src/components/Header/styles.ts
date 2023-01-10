import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid #313144;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;

  > img {
    width: 3rem;
    height: 3rem;
    border-radius: 2rem;
  }

  > button {
    width: 8rem;
    padding: 0.3rem 2rem;
    border-radius: 0.3rem;
    background-color: #fed95f;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    color: #313144;
    cursor: pointer;

    &:hover {
      background-color: #fdc819;
    }
  }
`;
