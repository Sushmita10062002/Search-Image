import React, { useState } from 'react'
import "./SearchBox.css"
const SearchBox =(props)=>{
   const [text,setText] = useState('')
   const onSubmit = (e)=>{
      e.preventDefault()
      props.searchText(text)
   }
   return(
      <div className="search-container">
         <form onSubmit={onSubmit}>
            <div> 
              <input type="text" onChange={e=>setText(e.target.value)} placeholder="Search Images...."/>
              <button type="submit">Search</button>
            </div>
         </form>
      </div>
     
   )
}
export default SearchBox;