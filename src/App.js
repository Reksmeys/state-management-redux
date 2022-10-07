import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';

function App() {
  return (
    <Container>
      <NavBar />
      <Home />
    </Container>
  );
}

export default App;
