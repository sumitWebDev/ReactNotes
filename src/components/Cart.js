import { useSelector } from "react-redux"


const Cart = ()=>{
    const cartItems = useSelector (store => store.cart.items) //place of performance mistakes. do not subscribe to whole store
    return (<>
    <h1 className='font-bold text-lg'>Cart Items</h1>

    </>)
}


export default Cart