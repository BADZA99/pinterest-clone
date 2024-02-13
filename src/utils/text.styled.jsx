import styled from "styled-components";
import { css } from "styled-components";
import { SIZES } from "./sizes";
// import { colors } from "./colors";

export const Text = styled.p`
  font-size: ${(props) => SIZES[props.size] || SIZES["normal"]};
  color: ${(props) => props.color || props.theme.textColor};
  white-space: nowrap;
  font-weight: 600;
  /* police */
  font-family: "Roboto", sans-serif;

  &.logo {
    letter-spacing: 0.4px;
  }

  ${({ ColorType }) =>
    ColorType === "pinterestColor" &&
    css`
      color: ${(props) => props.theme.pinterestColor};
    `}

  ${({ ColorType }) =>
    ColorType === "SignTextColor" &&
    css`
      color: ${(props) => props.theme.SignTextColor};
    `}

     @media (max-width: 828px) {
    font-size: ${SIZES["medieum"]};
  }
     @media (max-width: 606px) {
    font-size: ${SIZES["normal"]};
  }
     @media (max-width: 412px) {
    font-size: ${SIZES["small"]};
  }
  
`;








export const TextLarge = styled(Text)`
    font-size: 32px;
`;
export const TextExtraLarge = styled(Text)`
    font-size: 48px;
`;


