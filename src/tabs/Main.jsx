import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../styles/Main.css';
import logo from '../assets/logo.png';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

mapboxgl.accessToken = 'pk.eyJ1IjoicWpiZmVycmVyIiwiYSI6ImNtYTlqbDEyaTBrYnUya3BzeHd4ZWFnOXMifQ.PeNfgVuGD53Au8Vmkpe2RQ';

const pestColors = {
  'Armyworm': 'green',
  'Cutworm': 'blue',
  'Red Spider Mites': 'red',
  'Others': 'violet',
};

const Main = () => {
  const mapContainerRef = useRef(null);
  const navigate = useNavigate();
  const mapRef = useRef(null);
  const [selectedPests, setSelectedPests] = useState([]);
  const markersRef = useRef([]);

  const clearMarkers = () => {
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];
  };

  const fetchPestReports = async (map, selectedPests) => {
    try {
      const snapshot = await getDocs(collection(db, 'pestScans'));

      snapshot.forEach((doc) => {
        const data = doc.data();
        const pest = data.result || 'Others';

        // Skip marker if it's not selected
        if (selectedPests.length > 0 && !selectedPests.includes(pest)) return;

        if (data.latitude && data.longitude) {
          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <div class="pest-popup">
              <h3 class="pest-popup-title">${pest}</h3>
              <p class="pest-popup-field"><strong>Reported by:</strong><br>${data.farmerName || 'Anonymous'}</p>
              <p class="pest-popup-field"><strong>Date Reported:</strong><br>${data.date ? `${data.date}, ${data.time}` : 'Unknown'}</p>
              ${data.image ? `<img src="${data.image}" alt="Pest Image" class="pest-popup-image" />` : ''}
            </div>
          `);

          const markerColor = pestColors[pest] || 'gray';

          const marker = new mapboxgl.Marker({ color: markerColor })
            .setLngLat([data.longitude, data.latitude])
            .setPopup(popup)
            .addTo(map);

          markersRef.current.push(marker);
        }
      });
    } catch (error) {
      console.error('Failed to load pest reports:', error);
    }
  };

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

    mapRef.current = map;
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

      fetchPestReports(map, []);
    });

    return () => map.remove();
  }, []);

  useEffect(() => {
    if (mapRef.current && mapRef.current.isStyleLoaded()) {
      clearMarkers();
      fetchPestReports(mapRef.current, selectedPests);
    }
  }, [selectedPests]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedPests((prev) =>
      isChecked ? [...prev, value] : prev.filter((pest) => pest !== value)
    );
  };

  const handleLogoClick = () => navigate('/home');

  return (
    <div className="main-container">
      <aside className="sidebar">
        <img
          src={logo}
          alt="Onion Pest Logo"
          className="logo"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
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
            <label>
              <input type="checkbox" value="Armyworm" onChange={handleCheckboxChange} />
              Armyworms
            </label>
            <label>
              <input type="checkbox" value="Cutworm" onChange={handleCheckboxChange} />
              Cutworms
            </label>
            <label>
              <input type="checkbox" value="Red Spider Mites" onChange={handleCheckboxChange} />
              Red Spider Mites
            </label>
            <label>
              <input type="checkbox" value="Others" onChange={handleCheckboxChange} />
              Others
            </label>
          </div>
        </div>

        <div className="card">
          <h4>Treatment Recommendations</h4>
          <p>Select a location to view pest control recommendations and current treatment status.</p>
        </div>
      </aside>

      <main className="map-area">
        <div ref={mapContainerRef} id="map" />
      </main>
    </div>
  );
};

export default Main;
