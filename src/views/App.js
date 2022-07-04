import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { Wrapper } from './App.styles';
import { theme } from '../assets/styles/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate';
import Home from './home/Home';
import About from './about/About';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

function App() {
  console.log(`testing functionality`);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <MainTemplate>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects/*" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </MainTemplate>
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
