import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import ParticleComponent from './components/subComponents/Particles';

const DarkTheme = {

  body:"#000000",
  text:"#FCF6F4",
  fontFamily:"'Source Sans Pro', sans-serif",
  textRgba : "252, 246, 244",
  bodyRgba:"0,0,0",
}

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
    <Box>
      <ParticleComponent theme='dark' />
      <div className="App">
        <header className="App-header">
          <p>
            OG-SNKRS
          </p>
          <p>Can you kick it?</p>
        </header>
      </div>
    </Box>
    </ThemeProvider>
  );
}

export default App;
