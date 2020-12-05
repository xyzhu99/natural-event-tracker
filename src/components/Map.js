// import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const Map = ({ eventData, center, zoom }) => {

  const markers = eventData.map( ev => {
    if ( ev.categories[0].id === "wildfires" ) {
      return <LocationMarker lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]} />
    }
    return null
  } )

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAYuxMu-4s_tC-64h1nM6lo7qVXkdrK0GE' }}
        defaultCenter={ center }
        defaultZoom={ zoom }
      >
        {markers}
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