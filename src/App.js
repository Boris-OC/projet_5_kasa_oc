import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LogementPage from './pages/LogementPage';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage'
import "./styles/main.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Navigate replace to="/accueil" />} />
              <Route path="/accueil" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/logement/:id" element={<LogementPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
