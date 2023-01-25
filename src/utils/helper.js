export default function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) => {
        if (searchText)
            return restaurant?.data?.name.includes(searchText)
    })
}