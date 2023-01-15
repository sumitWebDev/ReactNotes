import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../../config'
import Shimmer from './Shimmer'

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null)

    useEffect(() => {
        getRestaurantsInfo()
    }, [])

    async function getRestaurantsInfo() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=22.60834135798303&lng=88.33092369139194&menuId=${id}`)
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data);
    }

    return (restaurant === null)? <Shimmer /> :(
        <>
            <h1>{restaurant.name}</h1>
            <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />

        </>
    )

}

export default RestaurantMenu