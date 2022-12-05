import React from 'react'

const Search = ({handleSumit}) => {

  return (
    <form className='search' onSubmit={handleSumit}>
        <input id='inputSearch' type="text" />
        <button className='button_search'>🔍</button>
    </form>
  )
}

export default Search