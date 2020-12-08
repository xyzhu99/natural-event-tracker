import { Icon } from '@iconify/react'
import earthquake_icon from '@iconify-icons/ri/earthquake-fill'
import flood_icon from '@iconify-icons/ri/flood-fill'
import storm_icon from '@iconify-icons/ion/thunderstorm'
import seaLakeIce_icon from '@iconify-icons/openmoji/iceberg'
import volcano_icon from '@iconify-icons/maki/volcano-15'
import wildfire_icon from '@iconify-icons/mdi/pine-tree-fire'

const LocationMarker = ({ eventType, lat, lng, onClick }) => {

  let eventMarkerIcon; 
  switch( eventType ) {
    case "earthquakes": 
      eventMarkerIcon = <Icon icon={earthquake_icon} className="earthquake-icon" />
      break
    case "floods": 
      eventMarkerIcon = <Icon icon={flood_icon} className="flood-icon" />
      break
    case "severeStorms": 
      eventMarkerIcon = <Icon icon={storm_icon} className="storm-icon" />
      break
    case "seaLakeIce": 
      eventMarkerIcon = <Icon icon={seaLakeIce_icon} className="seaLakeIce-icon" />
      break    
    case "volcanoes": 
      eventMarkerIcon = <Icon icon={volcano_icon} className="volcano-icon" />
      break
    case "wildfires": 
      eventMarkerIcon = <Icon icon={wildfire_icon} className="wildfire-icon" />
      break
    default: 
      eventMarkerIcon = null
  }

  return (
    <div className="location-marker" onClick={onClick}>
      {eventMarkerIcon}
    </div>
  )
}

export default LocationMarker