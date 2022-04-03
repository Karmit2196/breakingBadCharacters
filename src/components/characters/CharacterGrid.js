import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.length?
      items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      )):
      <div>No data found</div>
}
    </section>
  )
}

export default CharacterGrid
