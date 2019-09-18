import React from 'react'
import User from './User.js'
import data from './data.js'


export default class Wrapper extends React.Component{
    render(){
        let users=[]
        users = data.map(element => { return <User 
             key={element.id} name={element.name} email={element.email}/>})
        return(
            <React.Fragment>
            {users}
            {this.props.children}
            </React.Fragment>
        )
    }
}
