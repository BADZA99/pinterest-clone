import './App.css';
import { GlobalStyles } from './App.styled';
import Home from './pages/home/Home';
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import { THEME } from './utils/themes';
import { useCallback, useState } from 'react';

// useCallback est un hook dans React qui retourne une version mémorisée d'une fonction callback qui ne change pas à moins que les dépendances ne changent. C'est utile lorsque vous passez des callbacks à des composants optimisés qui se basent sur l'égalité de référence pour éviter des rendus inutiles.
function App() {
  const [currentTheme, setCurrentTheme] = useState("Light");
  const ToggleTheme= useCallback(()=>{
    setCurrentTheme(currentTheme === "Light" ? "Dark" : "Light");
  
  },[]);
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
