import { useState } from 'react';
const Search = (props) => {
    const [searchText, setSearchText] = useState("");
    return (
        <div className="search-container">
            <input type="text" className='search-input' placeholder="Search" value={searchText}


                onChange={(e) => setSearchText(e.target.value)}
            />
            <button className='search-btn' onClick={() => props.clickHandler(searchText)}> Search</button>
        </div>
    )
}
export default Search