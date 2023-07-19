import React, { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults?.map((result) => ({
    longitude: result?.long,
    latitude: result?.lat,
  }));

  if (!searchResults || searchResults.length === 0) {
    return <div>No search results found.</div>;
  }

  const center = getCenter(coordinates);
  console.log(center);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });
  console.log(selectedLocation);
  return (
    <ReactMapGl
      mapStyle="mapbox://styles/gokmen1/clk29mpwj00e501qy713m0esl"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            {/* <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              👻
            </p> */}
          </Marker>

          {selectedLocation && selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGl>
  );
};

export default Map;
