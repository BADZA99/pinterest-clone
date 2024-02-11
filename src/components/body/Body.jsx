import React, { memo, useEffect, useState } from 'react'
import { AnimatedHeading, Dot, DotsContainer, HeadingContainer, StyledAnimatedIcon, StyledBody } from './Body.styled'
import { HiLightBulb } from "react-icons/hi";
import { TbBulbOff } from "react-icons/tb";
import { Text } from '../../utils/text.styled';
import { HEADINGS } from '../../utils/text';
import Tiles from '../tiles/Tiles';
import { AnimatePresence } from 'framer-motion';


// Le Hook React.memo est une fonction d'optimisation de performance qui aide à éviter les rendus inutiles dans les composants fonctionnels de React. Il fait cela en mémorisant le rendu du composant et en évitant un nouveau rendu si les props sont les mêmes que lors du dernier rendu
const Body = memo(({ ToggleTheme, currentTheme }) => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((currentHeadingIndex + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentHeadingIndex]);

  return (
    <StyledBody>
      <HeadingContainer>
        <Text size="xLarge">Get your next</Text>
        <AnimatePresence>
          {HEADINGS.map((heading, index) => (
            heading.index === currentHeadingIndex &&<AnimatedHeading
              initial={{ y: "50%", opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{
                y: "-50%",
                opacity: 0,
                transition: { duration: 1, ease: "easeInOut" },
                scale: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              key={index}
            >
              <Text size="xLarge" color={heading.color}>
                {heading.name}
              </Text>
            </AnimatedHeading>
          ))}
        </AnimatePresence>
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
})

export default Body
