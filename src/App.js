import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LogementPage from './pages/LogementPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header'; 
import ErrorBoundary from './components/ErrorBoundary';

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
              <Route path="/logement/:id" element={<LogementPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ErrorBoundary>
        </main>
      </div>
    </Router>
  );
}

export default App;