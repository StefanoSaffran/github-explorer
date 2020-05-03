import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 38px;
  color: ${({ theme }) => theme.colors.title};
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;

  @media (min-width: 500px) {
    font-size: 48px;
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 100%;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.text};
    border: 2px solid #999;
    margin-bottom: 20px;

    ${({ theme }) =>
      theme.title === 'dark' &&
      css`
        background-color: #222;
        border-color: #222; !important
      `};

    ${({ hasError }) =>
      hasError &&
      css`
        border-color: #c53030 !important;
      `}
  }

  button {
    width: 100%;
    height: 70px;
    background: #04d361;
    border: 0;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }

  @media (min-width: 500px) {
    flex-direction: row;

    input {
      flex: 1;
      border-right: 0;
      margin-bottom: 0;
      border-radius: 5px 0 0 5px;
      border-color: #fff;

      ${({ theme }) =>
        theme.title === 'dark' &&
        css`
        background-color: #222;
        border-color: #222; !important
      `};
    }

    button {
      width: 210px;
      border-radius: 0 5px 5px 0;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 10px;
  text-align: center;

  @media (min-width: 500px) {
    text-align: start;
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

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

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
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
