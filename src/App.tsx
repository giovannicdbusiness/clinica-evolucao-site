import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Perseveranca from '@/pages/clinics/Perseveranca';
import LitoralSul from '@/pages/clinics/LitoralSul';
import VargemGrande from '@/pages/clinics/VargemGrande';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="perseveranca" element={<Perseveranca />} />
          <Route path="litoral-sul" element={<LitoralSul />} />
          <Route path="vargem-grande" element={<VargemGrande />} />
        </Route>
      </Routes>
    </Router>
  );
}
