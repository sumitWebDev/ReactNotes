import { Outlet } from "react-router-dom"
import Profile from "./Profile"
import ProfileFunctionalComp from './ProfileClass'
const About = () =>{

    return (
        <>
        <h1>About</h1>
        <p>React Course</p>
        <Profile/>
        <ProfileFunctionalComp name={'Sumit'}/>
        </>
    )

}

export default About