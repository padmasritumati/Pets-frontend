import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import { apiKeyGoogle } from "../../config/constants";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <h1 className="pin-text">{text}</h1>
  </div>
);

const Map = ({ sitterList, location }) => (
  <div className="map">
    <h2 className="map-h2">Map</h2>
    <div className="google-map">
    
      <GoogleMapReact
        bootstrapURLKeys={{
          key: apiKeyGoogle,
          language: "en",
          region: "US",
        }}
        
        defaultCenter={{
          lat: location.lat,
          lng: location.log,
        }}
        defaultZoom={14}
      >
      
        {sitterList.map((sitter, i) => {
          return (
            <LocationPin
              key={i}
              lat={sitter.user.latitude}
              lng={sitter.user.longitude}
              text={sitter.user.full_name}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  </div>
);
export default Map;
