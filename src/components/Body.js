import RestaurantCard from './RestaurantCard'
import restaurantLists from '../data/restaurant-data'
import { useState } from 'react';
const restaurantList = restaurantLists;
function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) => {if(searchText)
        return restaurant.data.name.includes(searchText)})
}


const Body = () => {
    const [searchText, setSearchText] = useState("KFC");
    const [restaurants, setRestaurants] = useState(restaurantList)
    return (
        <>
            <div class="search-container">
                <input type="text" className='search-input' placeholder="Search" value={searchText}


                    onChange={(e) => setSearchText(e.target.value)}
                />
                <p>{searchText}</p>
                <button className='search-btn' onClick={

                    () => {

                        const data = filterData(searchText, restaurantLists);
                        if(data.length>0)
                            setRestaurants(data);
                        else
                        setRestaurants(restaurantLists)
                    }}>

                    Search
                </button>
            </div>
            <div className="restaurant-lists">

                {
                    restaurants.map((restaurant) =>
                    //Using component approach
                    { return <RestaurantCard {...restaurant.data} key={restaurant.data.id} /> }

                        //Using normal function Approach
                        //RestaurantCard(restaurant.data)
                    )
                }
            </div>
        </>
    )
}

export default Body