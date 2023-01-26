import React from 'react'


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: {}
        };
        console.log(`${this.props.name} Constructor`)
    }
    async componentDidMount (){
        console.log(`${this.props.name} componentDidMount`)
        const data = await fetch ('https://api.github.com/users/sumitWebDev');
        const json = await data.json();
        console.log(json)
        this.timer = setInterval(function(){
            console.log('SetInterval');
        },1000)
        this.setState({
            userInfo : json
        })
        console.log(`${this.props.name} componentDidMount`)
    }
    // componentDidUpdate = ()=>{

    // }
    componentWillUnmount = ()=>{
        clearInterval(this.timer)
    }
    // async componentDidMount (){
    //     console.log(`${this.props.name} componentDidMount`)
    // }
    render(){
        console.log(`${this.props.name} render`)
        return <>
        <h1>{this.props.name}</h1>
        <img src = {this.state.userInfo.avatar_url} />
        <h2>{this.state.userInfo.login}</h2>
        </>
    }
}

export default Profile