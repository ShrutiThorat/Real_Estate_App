import { useState } from 'react'
import './SearchBar.scss'
import SearchIcon from '../../assets/search.png'

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: 'buy',
    location: '',
    minPrice: 0,
    maxPrice: 0,
  })

  const switchType = (type) => {
    setQuery((prev) => ({ ...prev, type: type }))
  }

  return (
    <div className='searchBar'>
      <div className='type'>
        <button
          onClick={() => switchType('buy')}
          className={query.type === 'buy' ? 'active' : ''}
        >
          Buy
        </button>
        <button
          onClick={() => switchType('rent')}
          className={query.type === 'rent' ? 'active' : ''}
        >
          Rent
        </button>
      </div>
      <form>
        <input type='text' name='location' placeholder='City Location' />
        <input
          type='number'
          name='minPrice'
          min={0}
          max={10000000}
          placeholder='Min Price'
        />
        <input
          type='number'
          name='maxPrice'
          min={0}
          max={10000000}
          placeholder='Max Price'
        />
        <button>
          <img src={SearchIcon} />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
