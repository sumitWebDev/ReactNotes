import RestaurantCard from './RestaurantCard'
import restaurantLists from '../data/restaurant-data'
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom'
const restaurantList = restaurantLists;


function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) => {
        if (searchText)
            return restaurant.data.name.includes(searchText)
    })
}


const Body = () => {
    const [searchText, setSearchText] = useState("KFC");

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(() => {
        getRestaurants()
    }, []);

    async function getRestaurants() {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.60834135798303&lng=88.33092369139194&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards[0].data.data.cards)
        setAllRestaurants(json.data.cards[0].data.data.cards)
        setFilteredRestaurants(json.data.cards[0].data.data.cards)
    }

    if (!allRestaurants) return null
    return (allRestaurants.length === 0) ? <Shimmer /> : (
        <>
            <div class="search-container">
                <input type="text" className='search-input' placeholder="Search" value={searchText}


                    onChange={(e) => setSearchText(e.target.value)}
                />
                <p>{searchText}</p>
                <button className='search-btn' onClick={

                    () => {

                        const data = filterData(searchText, allRestaurants);
                        if (data.length > 0)
                            setFilteredRestaurants(data);
                        else if (searchText === '')
                            setFilteredRestaurants(allRestaurants)
                        else
                            setFilteredRestaurants([])
                    }}>

                    Search
                </button>
            </div>
            <div className="restaurant-lists">

                {
                    (filteredRestaurants.length > 0) ? (filteredRestaurants.map((restaurant) =>
                    //Using component approach
                    {
                        return (

                            <Link to={`/restaurant/${restaurant.data.id}`} key={restaurant.data.id} >
                                <RestaurantCard {...restaurant.data} />
                            </Link>

                        )
                    }

                        //Using normal function Approach
                        // RestaurantCard({...restaurant.data} )
                    )) : <h1>No matching records</h1>
                }
            </div>
        </>
    )
}

export default Body