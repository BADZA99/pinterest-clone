import styled from "styled-components";
import { IoIosCloudyNight } from "react-icons/io";
import {keyframes} from "styled-components";

export const StyledBody = styled.div`
width: 100vw;
height: 100vh;
/* background: #fff; */
/* position: relative; */
`;

const Bounce = keyframes`
0%{
    transform: translate(-50%,0);
}
50%{
    transform: translate(-50%,-2rem);
}
100%{
    transform: translate(-50%,0rem);
}
`;

export const StyledAnimatedIcon = styled(IoIosCloudyNight)`
  background-color: ${(props) => props.bgColor || "black"};
  color: "white";
  border-radius: 100rem;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translate(-50%);
  animation: ${Bounce} 2s ease-in-out infinite;

  &:hover {
    cursor: pointer;
  }
`;
