import { Routes, Route } from 'react-router-dom';
import Home from './App.jsx';
import Contact from './contact';
import Devis from './Devis';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Devis" element={<Devis />} />
        </Routes>
    );
}

export default App;