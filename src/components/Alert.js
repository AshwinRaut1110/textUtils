import React from 'react'

// && makes sure the component is only returned when message and type are not null

export default function Alert({ alert } = { }) {

  // const capitalize = (word) => {
  //   const lower = word.toLowerCase();
  //   return lower.charAt(0).toUpperCase() + lower.slice(1);
  // }

  return (
    (alert) && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
      {alert.message}
    </div>
  )
}
