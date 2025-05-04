import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // ← Add this
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../styles/Main.css';
import logo from '../assets/logo.png';

mapboxgl.accessToken = 'pk.eyJ1IjoicWpiZmVycmVyIiwiYSI6ImNtYTlqbDEyaTBrYnUya3BzeHd4ZWFnOXMifQ.PeNfgVuGD53Au8Vmkpe2RQ';

const Main = () => {
  const mapContainerRef = useRef(null);
  const navigate = useNavigate(); // ← React Router navigation hook

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [121.774, 12.8797],
      zoom: 10,
      pitch: 70,
      bearing: 10,
      antialias: true,
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.on('load', () => {
      map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.terrain-rgb',
        tileSize: 512,
        maxzoom: 14,
      });

      map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 });

      map.addLayer({
        id: 'sky',
        type: 'sky',
        paint: {
          'sky-type': 'atmosphere',
          'sky-atmosphere-sun': [0.0, 0.0],
          'sky-atmosphere-sun-intensity': 15,
        },
      });
    });

    return () => map.remove();
  }, []);

  const handleLogoClick = () => {
    navigate('/home'); // ← Go back to home page
  };

  return (
    <div className="main-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <img
          src={logo}
          alt="Onion Pest Logo"
          className="logo"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }} // Indicates it's clickable
        />

        <div className="card">
          <h3>Philippine Regions</h3>
          <select>
            <option>Select a Region</option>
            <option>National Capital Region (NCR)</option>
            <option>Cordillera Administrative Region (CAR)</option>
            <option>Region I (Ilocos Region)</option>
            <option>Region II (Cagayan Valley)</option>
            <option>Region III (Central Luzon)</option>
            <option>Region IV-A (CALABARZON)</option>
            <option>MIMAROPA Region</option>
            <option>Region V (Bicol Region)</option>
            <option>Region VI (Western Visayas)</option>
            <option>Negros Island Region (NIR)</option>
            <option>Region VII (Central Visayas)</option>
            <option>Region VIII (Eastern Visayas)</option>
            <option>Region IX (Zamboanga Peninsula)</option>
            <option>Region X (Northern Mindanao)</option>
            <option>Region XI (Davao Region)</option>
            <option>Region XII (SOCCSKSARGEN)</option>
            <option>Region XIII (Caraga)</option>
            <option>Bangsamoro Autonomous Region In Muslim Mindanao (BARMM)</option>
          </select>
        </div>

        <div className="card">
          <h4>Pest Categories</h4>
          <div className="checkbox-group">
            <label><input type="checkbox" /> Armyworms</label>
            <label><input type="checkbox" /> Cutworms</label>
            <label><input type="checkbox" /> Red Spider Mites</label>
            <label><input type="checkbox" /> Others</label>
          </div>
        </div>

        <div className="card">
          <h4>Treatment Recommendations</h4>
          <p>Select a location to view pest control recommendations and current treatment status.</p>
        </div>
      </aside>

      {/* Map */}
      <main className="map-area">
        <div ref={mapContainerRef} id="map" />
      </main>
    </div>
  );
};

export default Main;
