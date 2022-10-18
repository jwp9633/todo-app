import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Nav from './components/Nav';
import Todos from './components/Todos';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  border: 1px gray solid;

  display: grid;
  grid-template-columns: 160px 1fr;
  grid-template-rows: 40px 1fr 40px;
  grid-template-areas:
    'header header'
    'nav main'
    'footer footer';
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Nav />
        <Todos />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
