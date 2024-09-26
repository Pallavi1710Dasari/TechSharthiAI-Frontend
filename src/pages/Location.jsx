import React, { useState, useEffect, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix the marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function Location({ closeForm }) {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [apiCalled, setApiCalled] = useState(false); // Track if API has been called

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setPosition(coords);
      });
    } else {
      console.log('Geolocation is not available in your browser.');
    }
  }, []);

  const onLocationClick = useCallback((coords) => {
    if (!apiCalled) {
      console.log('Captured Coordinates:', coords);
      fetch('http://localhost:3000/images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ latitude: coords.latitude, longitude: coords.longitude }),
      })
        .then((response) => response.json())
        .then((data) => console.log('API Response:', data))
        .catch((error) => console.error('Error:', error));

      setApiCalled(true); // Mark the API as called
    }
  }, [apiCalled]);

  useEffect(() => {
    if (position.latitude && position.longitude && !apiCalled) {
      // Trigger the API call only once the coordinates are captured
      onLocationClick(position);
    }
  }, [position, onLocationClick, apiCalled]);

  return (
    <div className="w-full pt-2 pl-3">
      <div className="text-2xl bg-gray-500 text-white mb-4">
        <h2>Location of the Site</h2>
        {position.latitude && position.longitude ? (
          <p>
            Latitude: {position.latitude}, Longitude: {position.longitude}
          </p>
        ) : (
          <p>Loading coordinates...</p>
        )}
      </div>

      {position.latitude && position.longitude && (
        <MapContainer
          center={[position.latitude, position.longitude]}
          zoom={13}
          style={{ height: '400px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          <Marker position={[position.latitude, position.longitude]}>
            <Popup>
              You are here: Latitude: {position.latitude}, Longitude: {position.longitude}
            </Popup>
          </Marker>
        </MapContainer>
      )}

      <button
        type="button"
        onClick={closeForm}
        className="bg-orange-base text-white px-8 py-3 mr-4 mt-2"
      >
        Close
      </button>
    </div>
  );
}
