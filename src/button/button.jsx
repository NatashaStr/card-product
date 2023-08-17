import styled, { css } from "styled-components";
import { Button as ElementButton } from "/src/elements";

const Button = styled(ElementButton)`
  background-color: ${(props) => props.theme.buttonColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, box-shadow 03s;
  ${(props) => {
    const theme = props.theme.button[props.size || "medium"];

    return css`
      height: ${theme.height};
      padding-left: ${theme.padding};
      padding-right: ${theme.padding};
      font-size: ${theme.fontSize};
      border-radius: ${theme.radius};
    `;
  }}

  &:active,
  &:hover {
    background-color: ${(props) => props.theme.buttonHover};
  }

  &:active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
  }

  &:disabled {
    opacity: 0.7;
    box-shadow: none;
  }
`;

export default Button;
