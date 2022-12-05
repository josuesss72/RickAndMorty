import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import Loading from './loadingRsdnt/Loading'
import './loadingRsdnt/Loading.css'

const Resident = ({url}) => {
  
  const [resident, setResident] = useState()

  useEffect(()=>{
    axios.get(url)
      .then(res => setResident(res.data))
      .catch(err => console.log(err))
  },[])

  console.log(resident)

  return (
    <article className='resident'>
      {
        resident ? 
          <>
            <img className='img_resident' src={resident?.image} alt="" />
            <b className='status'><div className='circle'></div>{resident?.status}</b>
            <ul>
              <li><b>gender</b> {resident?.gender}</li>
              <li><b>specie</b>{resident?.species}</li>
              <li><b>origin</b>{resident?.origin.name}</li>
              <li><b>episode</b>{resident?.episode.length}</li>
            </ul>
          </>  
        :
          <Loading/>
      }
    </article>
    
  )
}

export default Resident