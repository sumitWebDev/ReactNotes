import RestaurantCard from './RestaurantCard'
import restaurantLists from '../data/restaurant-data'
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom'
import Search from './Search'
import filterData from '../utils/helper'



const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(() => {
        getRestaurants()
    }, []);
    const clickHandler = (searchText) => {

        const data = filterData(searchText, allRestaurants);
        if (data.length > 0)
            setFilteredRestaurants(data);
        else if (searchText === '')
            setFilteredRestaurants(allRestaurants)
        else
            setFilteredRestaurants([])
    }
    async function getRestaurants() {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.60834135798303&lng=88.33092369139194&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const filteredApiData = json.data.cards[2].data.data.cards

        setAllRestaurants(filteredApiData)
        setFilteredRestaurants(filteredApiData)
    }
    if (!allRestaurants) return null
    return (allRestaurants.length === 0) ? <Shimmer /> : (
        <>
            <Search clickHandler={clickHandler} />
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