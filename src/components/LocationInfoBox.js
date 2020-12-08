// import React from 'react'

const LocationInfoBox = ({ info, onClose }) => {
  return (
    <div className="location-info" onClose={onClose}>
      <h2>Event Location Info</h2>
      <button className="closeButton" onClick={onClose}>X</button>
      <ul>
        <li>ID: <strong>{ info.id }</strong></li>
        <li>TITLE: <strong>{ info.title }</strong></li>
        <li>DATE: <strong>{ info.date }</strong></li>
        <li>LOCATION TYPE: <strong>{ info.locationType }</strong></li>
      </ul>
    </div>
  )
}

export default LocationInfoBox
