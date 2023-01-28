import { useState } from 'react';
const Search = (props) => {
    const [searchText, setSearchText] = useState("");
    return (
        <div className="search-container p-5 bg-pink-50 my-2">
            <input type="text" className='focus:bg-green-200 p-2' placeholder="Search" value={searchText}


                onChange={(e) => setSearchText(e.target.value)}
            />
            <button className='p-1 m-2 bg-purple-900 text-white rounded-md hover:bg-green-700' onClick={() => props.clickHandler(searchText)}> Search</button>
        </div>
    )
}
export default Search