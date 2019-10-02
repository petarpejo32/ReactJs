import React from 'react'
import User from './User'
import axios from 'axios'
import Error from './Error'


class Wrapper extends React.Component {
    // let users = []
    // users = data.map(element => {
    //     return <User key={element.id} name={element.name} email={element.email} /> 
    // })
constructor(props){
    super(props)
    this.state={
        data=null
        
    }
}
componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        const users = response.data.map((element)=>{
            return <User
                key={element.id}
                name={element.name}
                email={element.email}
            />
        })
        this.setState({data:users})
    })
    .catch((error)=>{
        this.state({data:<Error/>})
    })
}

    render(){
        return (
            <React.Fragment>
                {this.props.children}
                {
                {this.state.data}
                ?<div>Loading...</div>
                :this.state.data
                
                }
                
            </React.Fragment>
        )
    }
}

export default Wrapper