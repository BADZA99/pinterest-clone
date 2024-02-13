import styled from "styled-components";
import { motion } from "framer-motion";


export const TilesContainer = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: grey; */
  display: grid;
  /* align-content:end; */
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1rem;
  margin-top: 13rem;

  @media (max-width: 600px) {
    margin-top: 9rem;
  }
`;
export const TileColumn = styled.div`
  height: 30rem;
  width: 100%;
  /* background-color: blue; */
  transform: translateY(${({margin}) => margin || "0rem"});
  position: absolute;
`;
export const AnimatedColumn = styled(motion.div)`
position: relative;
`;
export const Tile = styled.img`
  height: 23rem;
  width: 100%;
  border-radius:1rem;
  object-fit: cover;
`;
