import React from 'react'
import { Tile, TileColumn, TilesContainer } from './Tiles.styled'
import { HEADINGS, TILES_MARGINS } from '../../utils/text'

const Tiles = ({ currentHeadingIndex }) => {
  return (
    <TilesContainer>
      {TILES_MARGINS.map((margin, index) => {
        return (
          <TileColumn key={index} margin={margin}>
            <Tile
              src={`${HEADINGS[currentHeadingIndex].section}/${HEADINGS[currentHeadingIndex].section}-${index*2}.jpg`}
            />
            <Tile
              src={`${HEADINGS[currentHeadingIndex].section}/${HEADINGS[currentHeadingIndex].section}-${index*2+1}.jpg`}
            />
          </TileColumn>
        );
      })}
    </TilesContainer>
  );
};

export default Tiles
