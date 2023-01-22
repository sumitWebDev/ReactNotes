import { useState, useEffect } from "react"

const useRestaurant = (id) =>{
    const [restaurant, setRestaurant] = useState(null)

    useEffect(() => {
        getRestaurantsInfo()
    }, [])

    async function getRestaurantsInfo() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=22.60834135798303&lng=88.33092369139194&menuId=${id}`)
        const json = await data?.json();
        console.log(json);
        setRestaurant(json?.data);
    }

    return restaurant
}

export default useRestaurant