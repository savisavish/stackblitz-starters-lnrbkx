import './style.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import { NavbarSC } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <>
      <NavbarSC />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  );
};
