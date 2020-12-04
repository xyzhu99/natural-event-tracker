// import React from 'react'
import GoogleMapReact from 'google-map-react'

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAYuxMu-4s_tC-64h1nM6lo7qVXkdrK0GE' }}
        defaultCenter={ center }
        defaultZoom={ zoom }
      >

      </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 37.2754919, 
    lng: -104.6582933
  }, 
  zoom: 5
}

export default Map