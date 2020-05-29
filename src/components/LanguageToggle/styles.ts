import styled, { css } from 'styled-components';

interface ContainerProps {
  selected: 'pt' | 'en';
}

export const Container = styled.div<ContainerProps>`
  height: 60px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    margin-right: 15px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
  .ptBR {
    ${({ selected }) =>
      selected === 'pt' &&
      css`
        box-shadow: 0 0 5px 3px #04d361;
      `}
  }

  .enUS {
    ${({ selected }) =>
      selected === 'en' &&
      css`
        box-shadow: 0 0 5px 3px #b22222;
      `}
  }
`;
