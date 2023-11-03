import { useState, useEffect } from 'react';
import './App.css';
import {
  RouterProvider,
  Route,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Edu from './pages/Edu';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="*" element={<NotFound />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="edu" element={<Edu />} />
    </Route>
  )
);

function App() {
  const [firstVisit, setFirstVisit] = useState(true);

  useEffect(() => {
    if (firstVisit) {
      router.navigate('/about');
      setFirstVisit(false);
    }
  }, [firstVisit]);

  return <RouterProvider router={router} />;
}

export default App;
