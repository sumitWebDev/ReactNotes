import Search from '../Search'
import "@testing-library/jest-dom";
import { render ,fireEvent,waitFor} from '@testing-library/react'
import {restaurantData} from '../../../mocks/dummyData'
import {StaticRouter} from 'react-router-dom/server'
import {Provider} from "react-redux"
import store from '../../utils/store'
import Body from '../Body.js';
import Shimmer from '../Shimmer';

 global.fetch = jest.fn(()=>{
   return Promise.resolve({
        json : () => { return Promise.resolve(restaurantData) }
    })
 } )

 test("Shimmer should load on Homepage",() => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );

    const shimmer = body.getByTestId("shimmer");
    expect(shimmer.children.length).toBe(1);
  });

  test("Restaurant List should load on Homepage", async() => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
    await waitFor(() => expect(body.getByTestId("search-btn")));

  });

// test("Search Results on Homepage", async()=>{
//   const body = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Body />
//       </Provider>
//     </StaticRouter>
//   );
//   await waitFor(() => expect(body.getByTestId("search-btn")));

//   const input = body.getByTestId("search-input");
//   fireEvent.change(input,{target: {
//     value: "food"
//   }});
//   const searchBtn = body.getByTestId("search-btn");
//   fireEvent.click(searchBtn)
//   const resList = body.getByTestId("res-list");
//   console.log(resList.children.length)
//   expect(resList.children.length).toBe(1);
// })