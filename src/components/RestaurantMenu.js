import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {IMG_CDN_URL} from '../../config'


const RestaurantMenu = () =>{
    const {id} = useParams();
    //const {id} = params
    const [restaurant, setRestaurant] = useState({})

    useEffect (()=>{
        getRestaurantsInfo()
    },[])

    async function getRestaurantsInfo (){
        const data = await fetch('https://www.swiggy.com/dapi/menu/v4/full?lat=22.60834135798303&lng=88.33092369139194&menuId=381750')
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data);
    }
    return (
        <>
        <h1>Restaurant id : {id}</h1>
        <h2>{restaurant.name}</h2>
        <img src= {IMG_CDN_URL + restaurant.cloudinaryImageId} />
        </>
    )

}

export default RestaurantMenu