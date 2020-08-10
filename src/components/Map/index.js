import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";

import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
//import Sitter from "../../pages/SearchSitters/Sitter";
import { apiKeyGoogle } from "../../config/constants";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <h1 className="pin-text">{text}</h1>
  </div>
);

const Map = ({ sitterList }) => (
  <div className="map">
    <h2 className="map-h2">Map</h2>
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: apiKeyGoogle,
          language: "en",
          region: "US"
        }}
        defaultCenter={{ lat:52.0907, lng: 5.1214 }}
        defaultZoom={12}
      >
        {sitterList.map((sitter,i) => {
          return (
            <LocationPin
            key={i}
              lat={sitter.address.latitude}
              lng={sitter.address.longitude}
              text={sitter.full_name}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  </div>
);
export default Map;
