import React from 'react'
import './Search.css'
const TITLE_MANGMENT = 'ניהול משימות';

interface SearchProps {
 
    setSearch: (e:any) => void
  
}

const Search :React.SFC<SearchProps> =props  => {
    return (

        <div className='mange-task'>
            <div>
                <h3 className='title'>{TITLE_MANGMENT}</h3>
            </div>
            <div className='input-div'>
                <input onChange={(e) => props.setSearch(e.target.value)}
                 className='add-input-search'
                  type="text"
                  placeholder='Search By Name'
                  />
            </div>

        </div>

    )
}
export default Search