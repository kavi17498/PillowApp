// GoogleMap.js
import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_API_KEY',
  });

  const [map] = React.useState(null); // Remove unused variable 'map'

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    // Handle cleanup if needed
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: -3.745, lng: -38.523 }}
      zoom={8}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, go here */}
      <Marker position={{ lat: -3.745, lng: -38.523 }} />
    </GoogleMap>
  ) : <></>;
}

export default Map;
