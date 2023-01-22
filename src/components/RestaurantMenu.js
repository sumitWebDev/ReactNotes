import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../../config'
import useRestaurant from '../utils/useRestaurant'
import Shimmer from './Shimmer'

const RestaurantMenu = () => {
    const { id } = useParams();
    const restaurant = useRestaurant(id)
    console.log(restaurant)
    return (restaurant === null)? <Shimmer /> :(
        <>
            <h1>{restaurant.name}</h1>
            <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        </>
    )

}

export default RestaurantMenu