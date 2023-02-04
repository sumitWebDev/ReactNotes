import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../../config'
import { addItem } from '../utils/cartSlice'
import useRestaurant from '../utils/useRestaurant'
import Shimmer from './Shimmer'
import { useDispatch } from 'react-redux'

const RestaurantMenu = () => {
    const { id } = useParams();
    const restaurant = useRestaurant(id)
    console.log(restaurant);

    const dispatch = useDispatch();
    const handleAddItems = () =>{
        dispatch(addItem('Grapes')); //dispatch action, pass payload
    }
    return (restaurant === null)? <Shimmer /> :(
        <>
            <h1>{restaurant.name}</h1>
            <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
            <div>
                <button onClick = {()=> handleAddItems()}>Add Item</button>
            </div>
            {/* <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name} Add</li>
          ))}
        </ul>
      </div> */}
        </>
    )

}

export default RestaurantMenu