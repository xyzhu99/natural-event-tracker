import { Icon } from '@iconify/react'
import wildfire_icon from '@iconify-icons/mdi/pine-tree-fire'

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Icon icon={wildfire_icon} /> Natural Event Tracker (Data Provided By NASA) 
      </h1>
    </header>
  )
}

export default Header