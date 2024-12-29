// src/components/ErrorBoundary/index.jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    // Met à jour l'état pour afficher l'UI de secours
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log des erreurs ou envois vers un service de suivi des erreurs
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // Affichage d'un message d'erreur personnalisé
      return <h1>Une erreur est survenue dans l'application. Veuillez réessayer plus tard.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;