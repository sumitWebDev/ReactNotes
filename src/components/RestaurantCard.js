import { useContext } from 'react'
import { IMG_CDN_URL } from '../../config'
import UserContext from '../utils/UserContext'
const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
}) => {

    const {user} = useContext(UserContext)
    return (
        <div className='w-60 px-3 m-2 shadow-lg bg-pink-50 max-h-max' >
            <img src={IMG_CDN_URL + cloudinaryImageId} alt='Burger King' />
            <h2 className="font-bold">{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{lastMileTravelString}</h4>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}

export default RestaurantCard