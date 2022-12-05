import React from 'react'

const Location = ({type, amountResident, id, name, dimension}) => {
  return (
    <div className='info_location'>
      <h2>{name}</h2>
			<ul>
				<li><b>Type</b>{type}</li>
				<li className='bl'><b>Dimension</b>{dimension}</li>
				<li className='bl'><b>Population</b>{amountResident}</li>
			</ul>
    </div>
  )
}

export default Location