import styled from "styled-components";
import { Text } from "../../utils/text.styled";
import { css } from "styled-components";

export const StyledHeader = styled.div`
/* background-color: pink; */
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
padding:1.4rem 1rem 0 1.8rem  ;
/* border:1px solid red; */
position: absolute;
top:0;
`;


export const LogoContainer = styled.div`
display:flex;
align-items:center;
gap:.2rem;


`;
export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const StyledLink = styled(Text)`
  margin-right: 1.5rem;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
  `;
  export const AuthButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    `;


const heighlightStyle=css`
background-color:#E60022;
color:white;`;

const heighlightStyleSign = css`
  background-color: #efefef;
  color: black;
`;



export const AuthButton = styled(Text)`
  /* background-color:${(props) => props.color || "#efefef"} ; */
  /* color:${(props) => (props.color ? "white" : "#000")} ; */
  background-color: #efefef;
  padding: 0.7rem;
  border-radius: 100rem;

  ${({ type }) =>
    type === "highlight" ? heighlightStyle : heighlightStyleSign}

  &:hover {
    cursor: pointer;
    transform: scale(0.98);
  }
`;

