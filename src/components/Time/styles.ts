import styled from 'styled-components';

export const TimeContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 30%;
  padding: 25px;
  text-align: center;

  > div {
    color: #fff;
    font-size: 1.5rem;
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`;
