import React from "react"
import { Outlet } from "react-router-dom"
import Profile from "./Profile"
import ProfileFunctionalComp from './ProfileClass'


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
        super(props)
    }



    render() {
        return (
            <>
                <h1>About</h1>
                <p>React Course</p>
                <Profile />
                <ProfileFunctionalComp name={'Sumit'} />

            </>
        )
    }
}

export default About