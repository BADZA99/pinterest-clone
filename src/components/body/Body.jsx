import React, { useState } from 'react'
import { Dot, DotsContainer, HeadingContainer, StyledAnimatedIcon, StyledBody } from './Body.styled'
import { HiLightBulb} from "react-icons/hi";
import { TbBulbOff } from "react-icons/tb";
import { Text } from '../../utils/text.styled';
import { HEADINGS } from '../../utils/text';
import Tiles from '../tiles/Tiles';



const Body = ({ ToggleTheme, currentTheme }) => {
    const [currentHeadingIndex,setCurrentHeadingIndex]=useState(0);
  return (
    <StyledBody>
      <HeadingContainer>
        <Text size="xLarge">Get your next</Text>
        <Text size="xLarge" color={HEADINGS[currentHeadingIndex].color}>
          {HEADINGS[currentHeadingIndex].name}
        </Text>
        <DotsContainer>
          {HEADINGS.map(({ index, color }) => (
            <Dot
              key={index}
              bgColor={currentHeadingIndex === index ? color : "#e1e1e1"}
              onClick={() => setCurrentHeadingIndex(index)}
            ></Dot>
          ))}
        </DotsContainer>
      </HeadingContainer>
      <Tiles currentHeadingIndex={currentHeadingIndex} />
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
