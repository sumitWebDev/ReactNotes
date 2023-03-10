import React from "react"
import { Outlet } from "react-router-dom"
import Profile from "./Profile"
import ProfileFunctionalComp from './ProfileClass'
import UserContext from "../utils/UserContext"

/**
 * Function based componet
 */
// const About = () => {

//     return (
//         <>
//             <h1>About</h1>
//             <p>React Course</p>
//             <Profile />
//             <ProfileFunctionalComp name={'Sumit'} />
//         </>
//     )

// }

/**
 * Class Based Component
 * React.Component or Component
 */
class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent - Constructor")
    }
    componentDidMount=() => {
        console.log("Parent - ComponentDidMount")
    }

    render() {
        console.log("Parent - Render")
        return (
            <>
                <h1>About</h1>
                <UserContext.Consumer>
                    {({user})=> <p className='text-red-900 font-bold'>{user.name}</p>}
                </UserContext.Consumer>
                <p>React Course</p>
                <Outlet />
                {/* <Profile /> */}
                {/* <ProfileFunctionalComp name={'First Child'} /> */}
                {/* <ProfileFunctionalComp name={'Second Child'} /> */}
            </>
        )
    }
}

export default About