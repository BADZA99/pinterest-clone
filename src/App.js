import './App.css';
import { GlobalStyles } from './App.styled';
import Home from './pages/home/Home';
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import { THEME } from './utils/themes';

function App() {
  return (
    <>
    <ThemeProvider theme={THEME}>
    <GlobalStyles/>
      <Reset/>
    <Home/>
    </ThemeProvider>
    </>
  );
}

export default App;
