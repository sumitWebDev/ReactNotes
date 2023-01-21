import React from 'react'


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: {}
        };
    }
    async componentDidMount (){
        const data = await fetch ('https://api.github.com/users#sumitWebDev');
        const json = await data.json();
        this.setState({
            userInfo : json
        })
        console.log(this.state)
        console.log(json)
    }
    render(){
        return <>
        <h1>Profile Class Component</h1>
        {/* <img src = {this.state.userInfo[0].avatar_url} />
        <h2>{this.state.userInfo[0].login}</h2> */}
        </>
    }
}

export default Profile