import React from 'react'
import { StyledHome } from './Home.styled'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Body from '../../components/body/Body'

const Home = ({ ToggleTheme, currentTheme }) => {
  return (
    <StyledHome>
      <div
        style={{
          position: "relative",
        }}
      >
        <Header />
        <Body ToggleTheme={ToggleTheme}  currentTheme={currentTheme} />
      </div>
      <Footer />
    </StyledHome>
  );
};

export default Home
