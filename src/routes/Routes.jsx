import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Alphactory, Alphinance, NotFound, UnderConstruction } from '../pages/Index';
import Layout from '../components/Layout';

export default function AllRoutes () {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path='/' element={<Alphactory />} />
          <Route exact path='/alphactory' element={<Alphactory />} />
          <Route path='/alphinance' element={<Alphinance />} />
          <Route path='/py' element={<UnderConstruction />} />

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
