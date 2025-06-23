import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/home';
import { Lodging } from './pages/Lodging/lodging';
import { About } from './pages/About/about';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Error } from './components/Error/Error';
import ScrollToTopWrapper from './utils/hooks/scrollToTop';

import './utils/style/globalStyle.css';

// Render the app in the root element
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/Kasa_Vite">
      <ScrollToTopWrapper>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lodging/:id' element={<Lodging />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </ScrollToTopWrapper>
    </Router>
  </StrictMode>
);
