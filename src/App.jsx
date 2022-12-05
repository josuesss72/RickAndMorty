
import './App.css'
import Location from './components/Location/Location'
import './components/Location/Location.css'
import useFetch from './hooks/useFetch'
import './components/search/Search.css'
import Resident from './components/resident/Resident'
import './components/resident/Resident.css'
import useSearch from './hooks/useSearch'
import { useState } from 'react'
import InvalidInput from './components/error/InvalidInput'
import './components/error/InvalidInput.css'
import Header from './components/header/Header'
import './components/header/Header.css'

function App() {

  const { inputLocation, handleSumit } = useSearch()
  const [hasError, setHasError] = useState(false)

  const dataLocation = useFetch(inputLocation, setHasError)
  console.log(dataLocation)

  return (
    <div className="App">
      <Header handleSumit={handleSumit} />

      <main className='grid_container'>
        {
          hasError ?
            <InvalidInput />
            :
            <>
              <Location
                dimension={dataLocation?.dimension}
                id={dataLocation?.id}
                name={dataLocation?.name}
                type={dataLocation?.type}
                amountResident={dataLocation?.residents.length}
              />
              <div className='container_residents'>
                {
                  dataLocation?.residents.map((url) => {
                    return (
                      <Resident
                        url={url}
                        key={url}
                      />
                    )
                  })
                }
              </div>
            </>
        }
      </main>
    </div>
  )
}

export default App
