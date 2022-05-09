import React from 'react'
//import GoogleMapReact from 'google-maps-react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

import './map.css'

//const location = {
//  address: '890 Auraria Pkwy, Denver, CO',
//  lat: 39.7435,
//  lng: 105.0055,
//}

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Our Location</h2>

    <div className="google-map">
      <GoogleMap
        bootstrapURLKeys={{ key: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMap>
    </div>
  </div>
)

export default Map