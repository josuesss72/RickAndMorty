import React from 'react'
import Search from '../search/Search'

const Header = ({ handleSumit }) => {
  return (
    <header className='header'>
      <img className='sticker' src="../../images/rickAndMorty.png" alt="" />
      <img className='bg_img' src="../../images/bgImg.png" alt="" />
      <h1 className='title'>The world of Rick and Morty</h1>
      <Search handleSumit={handleSumit} />
    </header>
  )
}

export default Header