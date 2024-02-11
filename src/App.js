import './App.css';
import { GlobalStyles } from './App.styled';
import Home from './pages/home/Home';
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import { THEME } from './utils/themes';
import { useState } from 'react';

function App() {
  const [currentTheme, setCurrentTheme] = useState("Light");
  const ToggleTheme= ()=>{
    setCurrentTheme(currentTheme === "Light" ? "Dark" : "Light");
  
  }
  return (
    <>
    <ThemeProvider theme={THEME[currentTheme]}>
    <GlobalStyles/>
      <Reset/>
    <Home ToggleTheme={ToggleTheme}  currentTheme={currentTheme} />
    </ThemeProvider>
    </>
  );
}

export default App;
