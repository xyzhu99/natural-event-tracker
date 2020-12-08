import { Icon } from '@iconify/react'
import earthquake_icon from '@iconify-icons/ri/earthquake-fill'
import flood_icon from '@iconify-icons/ri/flood-fill'
import storm_icon from '@iconify-icons/ion/thunderstorm'
import seaLakeIce_icon from '@iconify-icons/openmoji/iceberg'
import volcano_icon from '@iconify-icons/maki/volcano-15'
import wildfire_icon from '@iconify-icons/mdi/pine-tree-fire'

const Header = () => {

  const earthquake = <Icon icon={earthquake_icon} className="earthquake-icon" />
  const flood = <Icon icon={flood_icon} className="flood-icon" />
  const storm = <Icon icon={storm_icon} className="storm-icon" />
  const seaLakeIce = <Icon icon={seaLakeIce_icon} className="seaLakeIce-icon" />
  const volcano = <Icon icon={volcano_icon} className="volcano-icon" />
  const wildfire = <Icon icon={wildfire_icon} className="wildfire-icon" />

  return (
    <header className="header">
      <h1>
        {earthquake}{flood}{storm}{seaLakeIce}{volcano}{wildfire} Natural Event Tracker (Data Provided By NASA) 
      </h1>
    </header>
  )
}

export default Header