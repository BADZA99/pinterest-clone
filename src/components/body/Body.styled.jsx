import styled from "styled-components";
import { IoIosCloudyNight } from "react-icons/io";
import {keyframes} from "styled-components";

export const StyledBody = styled.div`
width: 100vw;
height: 100vh;
/* background: #fff; */
/* position: relative; */
`;
export const DotsContainer = styled.div`
 /* background: #000; */
 margin-top:2.2rem;
 display: flex;
 gap:.8rem;
`;
export const Dot = styled.div.attrs(({bgColor})=>({
        bgColor:bgColor || "#e1e1e1"
    
}))`
    width: .6rem;
    height: .6rem;
    border-radius:100rem;
    background-color:${({bgColor})=>bgColor};

    &:hover{
        cursor: pointer;
    
    }

`;
export const HeadingContainer = styled.div`
display:flex;
flex-direction: column;
position: absolute;
left:50%;
top:25%;
transform: translateX(-50%);
gap:1rem;
justify-content: center;
text-align: center;
align-items: center;
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
