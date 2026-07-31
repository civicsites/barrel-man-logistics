import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';
import { renderToStaticMarkup } from 'react-dom/server';

// Create custom icons using Lucide icons rendered to static HTML
const createCustomIcon = (isPrimary) => {
  const iconMarkup = renderToStaticMarkup(
    <div className={`flex items-center justify-center rounded-full border-2 border-white shadow-md ${isPrimary ? 'bg-accent w-10 h-10' : 'bg-primary w-8 h-8'}`}>
      <MapPin className={`text-white ${isPrimary ? 'w-6 h-6' : 'w-4 h-4'}`} strokeWidth={2.5} />
    </div>
  );

  return L.divIcon({
    html: iconMarkup,
    className: 'bg-transparent border-none',
    iconSize: isPrimary ? [40, 40] : [32, 32],
    iconAnchor: isPrimary ? [20, 40] : [16, 32],
    popupAnchor: [0, isPrimary ? -40 : -32],
  });
};

const locations = [
  {
    name: 'Virginia Beach',
    position: [36.8529, -75.9780],
    isPrimary: true,
    description: 'Our Home Base - Comprehensive coverage'
  },
  {
    name: 'Norfolk',
    position: [36.8508, -76.2859],
    isPrimary: false,
    description: 'Full residential & commercial service'
  },
  {
    name: 'Chesapeake',
    position: [36.7184, -76.2467],
    isPrimary: false,
    description: 'Fast, dependable delivery'
  },
  {
    name: 'Portsmouth',
    position: [36.8354, -76.2983],
    isPrimary: false,
    description: 'Professional rental services'
  },
  {
    name: 'Suffolk',
    position: [36.7282, -76.5836],
    isPrimary: false,
    description: 'Comprehensive waste solutions'
  },
  {
    name: 'Hampton',
    position: [37.0299, -76.3452],
    isPrimary: false,
    description: 'Reliable site service'
  },
  {
    name: 'Newport News',
    position: [37.0871, -76.4730],
    isPrimary: false,
    description: 'Flexible service options'
  }
];

export default function InteractiveServiceMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Fix leaflet map container issues with flexbox/grid
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full bg-muted/50 rounded-2xl flex items-center justify-center animate-pulse">
        <MapPin className="w-12 h-12 text-muted-foreground/30" />
      </div>
    );
  }

  // Center slightly west of VA Beach to fit the whole Hampton Roads area nicely
  const mapCenter = [36.88, -76.25];
  
  // Custom CSS for popup to match site theme
  const popupStyle = `
    .leaflet-popup-content-wrapper {
      border-radius: 0.5rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      border: 1px solid hsl(var(--border));
    }
    .leaflet-popup-content {
      margin: 12px 16px;
      line-height: 1.5;
    }
    .leaflet-popup-tip {
      background: white;
      border: 1px solid hsl(var(--border));
      border-top: none;
      border-left: none;
    }
  `;

  return (
    <>
      <style>{popupStyle}</style>
      <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-sm border border-border/50 isolate">
        <MapContainer 
          center={mapCenter} 
          zoom={10} 
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%', zIndex: 1 }}
          className="z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            className="map-tiles grayscale-[30%] contrast-[1.1] opacity-90"
          />
          
          {/* Service Area Boundary - using primary color with high transparency */}
          <Circle 
            center={[36.8529, -75.9780]} 
            radius={35000} // ~35km radius covering Hampton Roads
            pathOptions={{ 
              color: 'hsl(var(--accent))', 
              fillColor: 'hsl(var(--primary))', 
              fillOpacity: 0.1,
              weight: 2,
              dashArray: '5, 10'
            }} 
          />

          {locations.map((loc) => (
            <Marker 
              key={loc.name} 
              position={loc.position}
              icon={createCustomIcon(loc.isPrimary)}
            >
              <Popup>
                <div className="text-center">
                  <h3 className="font-bold text-base text-foreground mb-1">{loc.name}</h3>
                  <p className="text-sm text-muted-foreground m-0">{loc.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
}