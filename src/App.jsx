import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import IonisingRadiation from './pages/IonisingRadiation';
import Customers from './pages/Customers';
import About from './pages/About';
import Glossary from './pages/Glossary';
import Products from './pages/Products';
import Experience from './pages/Experience';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ionising-radiation" element={<IonisingRadiation />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/about" element={<About />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/products" element={<Products />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;
