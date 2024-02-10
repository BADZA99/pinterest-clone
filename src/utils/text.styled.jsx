import styled from "styled-components";
import { SIZES } from "./sizes";
import { colors } from "./colors";

export const Text = styled.p`
  font-size: ${(props) => SIZES[props.size] || SIZES["normal"]};
    color: ${(props) => props.color || props.theme.textColor};
  white-space: nowrap;
  font-weight:600;
`;


export const TextLarge = styled(Text)`
    font-size: 32px;
`;
export const TextExtraLarge = styled(Text)`
    font-size: 48px;
`;


