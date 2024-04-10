import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCCT66DwDNlwEDgJxhKcaFpdQx9DQ6EDI0',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: -3.745, lng: -38.523 }}
      zoom={8}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, go here */ }
      <Marker
        position={{ lat: -3.745, lng: -38.523 }}
      />
    </GoogleMap>
  ) : <></>;
}

export default Map;
