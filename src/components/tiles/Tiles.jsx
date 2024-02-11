import React from "react";
import {
  AnimatedColumn,
  Tile,
  TileColumn,
  TilesContainer,
} from "./Tiles.styled";
import { HEADINGS, TILES_MARGINS } from "../../utils/text";
import { AnimatePresence } from "framer-motion";
import uuid from "react-uuid";

const Tiles = ({ currentHeadingIndex }) => {
  const transition = (index) => {
    return { duration: 1 + index / 10, ease: "easeInOut" };
  };
  return (
    <TilesContainer>
      {TILES_MARGINS.map((margin, index) => (
        <div>
          {HEADINGS.map((headings, headingIndex) => (
            <AnimatePresence>
              {currentHeadingIndex === headingIndex && (
                <AnimatedColumn
                  key={uuid}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 40, opacity: 1, transition: transition(index) }}
                  exit={{
                    y: "-50%",
                    x: 0,
                    opacity: 0,
                    transition: transition(index),
                  }}
                  transition={{ transition: transition(index) }}
                >
                  <TileColumn key={index} margin={margin}>
                    <Tile
                      src={`${HEADINGS[currentHeadingIndex].section}/${
                        HEADINGS[currentHeadingIndex].section
                      }-${index * 2}.jpg`}
                    />
                    <Tile
                      src={`${HEADINGS[currentHeadingIndex].section}/${
                        HEADINGS[currentHeadingIndex].section
                      }-${index * 2 + 1}.jpg`}
                    />
                  </TileColumn>
                </AnimatedColumn>
              )}
            </AnimatePresence>
          ))}
        </div>
      ))}
    </TilesContainer>
  );
};

export default Tiles;
