import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 26rem;

  > p {
    color: gary;
    font-size: 1.25rem;
    text-align: center;
    font-weight: 600;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.gray[100]};
  }

  > div.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;

    > svg {
      position: absolute;
      right: 1rem;
      top: 0.9rem;
    }

    > input {
      width: 100%;
      height: 2.5rem;
      padding-left: 2rem;
      margin-bottom: 1rem;
      border: none;
      border-radius: 0.3rem;
      background-color: ${({ theme }) => theme.colors.gray[700]};
      color: ${({ theme }) => theme.colors.gray[100]};
    }
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    margin-top: 2rem;
    margin-bottom: 1rem;
    width: 100%;
    height: 2.5rem;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.secondary[500]};

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary[600]};
    }
  }

  > a {
    color: ${({ theme }) => theme.colors.gray[100]};

    > span {
      color: ${({ theme }) => theme.colors.secondary[500]};
    }
  }
`;

export const FlexGit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  > p {
    color: ${({ theme }) => theme.colors.secondary[500]};
    text-align: center;
    margin-right: 1rem;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 6rem;
    height: 2.5rem;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.gray[600]};
    color: ${({ theme }) => theme.colors.gray[100]};

    > svg {
      font-size: 1.5rem;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray[700]};
    }
  }
`;
