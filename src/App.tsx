import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import EspacoTerapeutico from '@/pages/clinics/EspacoTerapeutico';
import Perseveranca from '@/pages/clinics/Perseveranca';
import LitoralNorte from '@/pages/clinics/LitoralNorte';
import VargemGrande from '@/pages/clinics/VargemGrande';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="espaco-terapeutico" element={<EspacoTerapeutico />} />
          <Route path="perseveranca" element={<Perseveranca />} />
          <Route path="litoral-norte" element={<LitoralNorte />} />
          <Route path="vargem-grande" element={<VargemGrande />} />
        </Route>
      </Routes>
    </Router>
  );
}
