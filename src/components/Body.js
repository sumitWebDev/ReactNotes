import RestaurantCard from './RestaurantCard'
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom'
import Search from './Search'
import filterData from '../utils/helper'
import { RESTAURANT_DETAILS_URL } from '../../config'
import Offline from './Offline';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const {user, setUser} = useContext(UserContext)
    useEffect(() => {
        getRestaurants()
    }, []);

    const isOnline = useOnline();
    if (isOnline === false) {
        return <Offline />
    }
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

        const data = await fetch(RESTAURANT_DETAILS_URL);
        const json = await data.json();
        const filteredApiData = json?.data?.cards[2]?.data?.data?.cards
        setAllRestaurants(filteredApiData)
        setFilteredRestaurants(filteredApiData)
    }
    if (!allRestaurants) return null
    return (allRestaurants.length === 0) ? <Shimmer /> : (
        <>
            <Search clickHandler={clickHandler} />
            <input value= {user.name} onChange={(e)=>{setUser({...user,name: e.target.value})} }/>
            <input value= {user.email} onChange={(e)=>{setUser({...user, email:e.target.value})} }/>
            <div className="flex flex-wrap" data-testid="res-list">

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
