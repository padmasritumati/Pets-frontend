import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'



const Map = ({ street,city,country,postcode, zoomLevel }) => (
  <div className="map">
    

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBnpQ7R3rbu-B1iV0cHxwUdnLSsRsCyeFI' }}
        defaultCenter={street,city,country,postcode}
        defaultZoom={zoomLevel}
      >
     
      </GoogleMapReact>
    </div>
  </div>
)
export default Map