import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";

import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";



const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

const Map = ({
  street,
  city,
  country,
  postcode,
  latitude,
  longitude,
  zoomLevel,
}) => (
  <div className="map">
    <h2 className="map-h2">Map</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBnpQ7R3rbu-B1iV0cHxwUdnLSsRsCyeFI" }}
        defaultCenter={{
          address: street,city,postcode,country,
          lat:52.7 ,
          lng:5 ,
        }}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={52.7}
          lng={5}
         
        />
      </GoogleMapReact>
    </div>
  </div>
);
export default Map;
