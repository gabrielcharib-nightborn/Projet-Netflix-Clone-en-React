import React, { Component } from 'react';
import "./PromoBanner.css"; 

class PromoBanner extends Component {
  render() {
    return (
      <div className="promo-banner">
        <h2>Promotion en cours !</h2>
        <p>Obtenez 30% de réduction sur tous les produits !</p>
        <button>Profiter de l'offre</button>
      </div>
    );
  }
}

export default PromoBanner;
