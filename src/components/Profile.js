import { useEffect } from "react"

const Profile = () =>{
    useEffect(()=>{
        var timer = setInterval(()=>{
            console.log('Interval')
        },1000)

        return(
            function(){
                   clearInterval(timer)
            }
        )
    })
    return (
        <h2>Profile</h2>
    )
}
export default Profile