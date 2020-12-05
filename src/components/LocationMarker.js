import { Icon } from '@iconify/react'
import wildfire_icon from '@iconify-icons/mdi/pine-tree-fire'

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="wildfire-marker" onClick={onClick}>
      <Icon icon={wildfire_icon} className="wildfire-icon" />
    </div>
  )
}

export default LocationMarker
