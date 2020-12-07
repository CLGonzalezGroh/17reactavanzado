import styled, { css } from "styled-components";

import { fadeIn } from "../../styles/animations";

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.fixed &&
    css`
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20 rgba(0, 0, 0, 0.3);
      left: 0;
      right: 0;
      top: -5px;
      max-width: 400px;
      margin: 0 auto;
      position: fixed;
      z-index: 1;
      transform: scale(0.7);
      ${fadeIn};
    `}
`;

export const Item = styled.li`
  padding: 0 8px;
`;
