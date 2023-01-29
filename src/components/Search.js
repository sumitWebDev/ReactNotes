import { useContext, useState } from 'react';
import UserContext from '../utils/UserContext';
const Search = (props) => {
    const [searchText, setSearchText] = useState("");
    const {user} = useContext(UserContext)
    return (
        <div className="search-container p-5 bg-pink-50 my-2">
            <input type="text" className='focus:bg-green-200 p-2' placeholder="Search" value={searchText}
               onChange={(e) => setSearchText(e.target.value)}
            />
            <input value= {user.name}> </input>
            <button className='p-1 m-2 bg-purple-900 text-white rounded-md hover:bg-green-700' onClick={() => props.clickHandler(searchText)}> Search</button>
        </div>
    )
}
export default Search