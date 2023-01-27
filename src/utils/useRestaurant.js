import { useState, useEffect } from "react"
import {RESTAURANT_MENU_URL} from '../../config'

const useRestaurant = (id) =>{
    const [restaurant, setRestaurant] = useState(null)

    useEffect(() => {
        getRestaurantsInfo()
    }, [])

    async function getRestaurantsInfo() {
        const data = await fetch(RESTAURANT_MENU_URL+id)
        const json = await data?.json();
        console.log(json);
        setRestaurant(json?.data);
    }

    return restaurant
}

export default useRestaurant