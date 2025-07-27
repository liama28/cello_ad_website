'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import map components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const Circle = dynamic(
  () => import('react-leaflet').then((mod) => mod.Circle),
  { ssr: false }
);

export default function MapSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const position: [number, number] = [41.2648, -96.0521];

  if (!isClient) {
    return (
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Location</h2>
          <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Loading map...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Location</h2>
        
        <div className="mb-8 text-center">
          <p className="text-gray-600 mb-4">
            Located in central Omaha. Exact address will be provided upon serious inquiry.
          </p>
          <p className="text-sm text-gray-500">
            Available for local pickup.
          </p>
        </div>
        
        <div className="h-96 rounded-lg overflow-hidden shadow-md">
          <MapContainer
            center={position}
            zoom={11}
            style={{ height: '100%', width: '100%' }}
            zoomControl={true}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle
              center={position}
              pathOptions={{ 
                fillColor: 'blue',
                fillOpacity: 0.2,
                color: 'blue',
                weight: 2
              }}
              radius={3000} // 1.5km radius for general area
            />
          </MapContainer>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            The blue circle shows the general area. Specific meeting location will be arranged with serious buyers.
          </p>
        </div>
      </div>
    </section>
  );
}