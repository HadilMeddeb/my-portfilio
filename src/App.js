import './App.css';
import  { ThemeProvider } from "styled-components";
import { useState } from 'react';
import   styled  from "styled-components";
import { darkTheme } from './utils/themes';
import { BrowserRouter as Router } from "react-router-dom"
import { Navbar } from './components/Navbar';
import About from  './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/HeroSection';
import Skills from './components/Skills';

const Body = styled.div`
background-color: ${({theme})=>theme.bg};
width:100%;
height:90vh   ;
overflow-x:hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  const [darkMode, setDarkMode]= useState(true)
  const [openModal, setOpenModal]= useState(true)
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar/>
      </Router>
     <Body>
         <Wrapper>
           <Hero />
         </Wrapper>
         <About/>
         <Skills/>
           <Projects  openModal={openModal} setOpenModal={setOpenModal}  />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
     </Body>
    </ThemeProvider>
  );
}

export default App;
