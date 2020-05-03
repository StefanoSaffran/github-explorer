import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.title};
    }
    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;
      text-align: center;

      strong {
        font-size: 30px;
        color: ${({ theme }) => theme.colors.textStrong};
      }

      p {
        font-size: 16px;
        color: ${({ theme }) => theme.colors.text};
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    justify-content: center;

    margin-top: 40px;

    li {
      & + li {
        margin-left: 40px;
      }

      strong {
        display: block;
        font-size: 30px;
        color: ${({ theme }) => theme.colors.textStrong};
      }

      span {
        display: block;
        margin-top: 4px;
        color: ${({ theme }) => theme.colors.text};
      }
    }
  }

  @media (min-width: 600px) {
    header {
      flex-direction: row;
      justify-content: flex-start;

      img {
      }

      div {
        text-align: start;

        strong {
          font-size: 36px;
        }

        p {
          font-size: 18px;
        }
      }
    }

    ul {
      justify-content: flex-start;
      li {
        & + li {
          margin-left: 80px;
        }

        strong {
          font-size: 36px;
        }
      }
    }
  }

  @media (max-width: 325px) {
    ul {
      li {
        strong {
          font-size: 20px;
        }

        span {
          font-size: 14px;
        }
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: ${({ theme }) => theme.colors.cardBackground};
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.textStrong};
      }

      p {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.text};
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
