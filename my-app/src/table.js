import React from 'react'
import axios from 'axios'
import store from './Redux/store'
import {connect} from 'react-redux'
import writeUsersToStore from './Redux/actions/writeUsersToStore'
import UsersList from './UsersList'
class Table extends React.Component= () =>{
    
    
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response)=>{
            this.props.writeUsersToStore(response.data)
        }
        .catch(error)=>{
            console.log(error)
        }

    }
    
    render (){
        let header=null
        let usersList=null

        if(this.props.users){
            usersList=this.props.users.map((user)=>{
                return<tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td></td>
                    <td></td>
                </tr>
            })
        }
    return (
        <table>
            <thead>
                {header}
            </thead>
            <tbody>
                {usersList}
            </tbody>
        </table>

    )
    }
}
function mapStateToProps(state){
    return{
        users:state.usersTableReducer.users
    }
}
function mapDispatchToProps(dispatch){
    return{
        writeUsersToStore:(data)=>dispatch(writeUsersToStore(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Table)