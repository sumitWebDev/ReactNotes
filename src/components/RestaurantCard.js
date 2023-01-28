
import { IMG_CDN_URL } from '../../config'

const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
}) => {
    return (
        <div className='w-60 px-3 m-2 shadow-lg bg-pink-50' >
            <img src={IMG_CDN_URL + cloudinaryImageId} alt='Burger King' />
            <h2 className="font-bold">{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
}

export default RestaurantCard