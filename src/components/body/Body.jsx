import React from 'react'
import { StyledAnimatedIcon, StyledBody } from './Body.styled'
import { HiLightBulb} from "react-icons/hi";
import { TbBulbOff } from "react-icons/tb";



const Body = ({ ToggleTheme, currentTheme }) => {
  return (
    <StyledBody>
        <HeadingContainer>
            
        </HeadingContainer>
      <StyledAnimatedIcon
        size={50}
        bgColor="white"
        onClick={ToggleTheme}
        as={currentTheme === "Light" ? HiLightBulb : TbBulbOff}
      />
    </StyledBody>
  );
};

export default Body
