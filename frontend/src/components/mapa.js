// src/components/Mapa.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 4.6486259, // Bogotá, por ejemplo
  lng: -74.2478958,
};

const Mapa = () => {
  return (
    <LoadScript googleMapsApiKey="TU_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        {/* Aquí puedes poner marcadores u otros componentes */}
      </GoogleMap>
    </LoadScript>
  );
};

export default Mapa;
