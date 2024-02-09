import './App.css';
import { GlobalStyles } from './App.styled';
import Home from './pages/home/Home';
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import { THEME } from './utils/themes';
import { useState } from 'react';

function App() {
  const [currentTheme, setCurrentTheme] = useState("Dark");
  return (
    <>
    <ThemeProvider theme={THEME[currentTheme]}>
    <GlobalStyles/>
      <Reset/>
    <Home/>
    </ThemeProvider>
    </>
  );
}

export default App;
