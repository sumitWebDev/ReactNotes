 import { render } from '@testing-library/react'
import Header from '../Header.js'
import {Provider} from "react-redux"
import store from '../../utils/store'
import {StaticRouter} from 'react-router-dom/server'
 test('Logo should load on rendering Header', ()=>{
     //Load Header
    const header = render(
    <StaticRouter>
    <Provider store={store}><Header/></Provider>
    </StaticRouter>
    )
     //Check if logo is loaded
    const logo = header.getAllByTestId("logo");
     expect(logo[0].src).toBe('http://localhost/dummy.png')
 })

 test('check if user is online', ()=>{
    //Load Header
   const header = render(
   <StaticRouter>
   <Provider store={store}><Header/></Provider>
   </StaticRouter>
   )
    //Check if user is online
    const online = header.getByTestId("online");
    expect(online.innerHTML).toBe('✅')
})

test('check cart component', ()=>{
    //Load Header
   const header = render(
   <StaticRouter>
   <Provider store={store}><Header/></Provider>
   </StaticRouter>
   )
    //Check cart component
    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe('Cart 0')
})