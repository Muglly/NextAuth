import styled from 'styled-components';

export const TimeContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 30%;
  padding: 25px;

  li {
    list-style: none;
    color: var(--Pale-Blue);
    padding-bottom: 15px;
    text-transform: capitalize;
    font-weight: normal;
    font-size: 0.9rem;
    cursor: pointer;

    &:hover,
    li.active {
      color: #fff;
    }
  }

  @media (max-width: 375px) {
    width: 100%;

    li {
      font-size: 1.1rem;
    }
    > .tabs {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
    }
  }
`;
