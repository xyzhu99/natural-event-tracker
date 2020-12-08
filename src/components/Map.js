// import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import { useState } from 'react'

const Map = ({ eventData, center, zoom }) => {

  const [locationInfo, setLocationInfo] = useState(null)

  const markers = eventData.map( ev => {
    const eventId = ev.categories[0].id; 
    if ( eventId === "earthquakes" || eventId === "floods" || eventId === "severeStorms" || eventId === "seaLakeIce" || eventId === "volcanoes" || eventId === "wildfires" ) {
      if ( ev.geometry[ev.geometry.length-1].type === "Point" ) {
        const eventLat = ev.geometry[ev.geometry.length-1].coordinates[1]
        const eventLng = ev.geometry[ev.geometry.length-1].coordinates[0]
        return <LocationMarker
          eventType={eventId}
          lat={eventLat}
          lng={eventLng}
          onClick={ () => setLocationInfo( { id: ev.id, title: ev.title, date: ev.geometry[ev.geometry.length-1].date, locationType: "Point" } ) }
        />
      } else if ( ev.geometry[ev.geometry.length-1].type === "Polygon" ) {
        return ev.geometry[ev.geometry.length-1].coordinates[0].map( (pair_coordinates) => (
          <LocationMarker
            eventType={eventId}
            lat={pair_coordinates[1]}
            lng={pair_coordinates[0]}
            onClick={ () => setLocationInfo( { id: ev.id, title: ev.title, date: ev.geometry[ev.geometry.length-1].date, locationType: "Polygon" } ) }
          />
        ) )
      }
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
      {locationInfo && <LocationInfoBox info={locationInfo} onClose={ () => setLocationInfo(null) }/>}
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