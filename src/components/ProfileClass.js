import React from 'react'


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count1: 0
        };
    }
    render(){
        return <>
        <h1>Profile Class Component</h1>
        <h2>{this.props.name}</h2>
        <h3>{this.state.count}</h3>
        <h3>{this.state.count1}</h3>
        <button onClick = {()=>{
            this.setState ({...this.state.count,count1:1})
        }}>Set Count</button>
        </>
    }
}

export default Profile