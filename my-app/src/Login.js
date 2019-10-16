import React from 'react'
import store from './Redux/store.js'
import Alert from './Alert.js'
import { updateUser, deleteUser } from './Redux/actions/updateUser.js'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            address: '',
            number:''
        }
    }

    checkInput = (event) => {
        const inputValue = event.target.value
        if (inputValue.indexOf('@') <= 0) {
            console.log('imas greska u mejlo')
        }
        this.saveInput(event)
    }

    submit = () => {
       store.dispatch(
           updateUser(
               this.state.username,
                this.state.password,
                this.state.address,
                this.state.number
            ))
    }

    delete =()=>{
        store.dispatch(
            deleteUser()
        )
    }
    saveInput = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }

    render () {
        return <React.Fragment>
            <Alert/>
            <input id='username'
                placeholder='Username'
                onChange={this.checkInput}
            />
            <input id='password'
                placeholder='Password' 
                onChange={this.saveInput}
            />
            <input id='address'
                placeholder='Address'
                onChange={this.saveInput}
            />
            <input id='number'
                placeholder='Number'
                onChange={this.saveInput}
            />
            <button id='submit' onClick={this.submit}>Log In!</button>
            <button id='delete' onClick={this.delete}>Delete!</button>
        </React.Fragment>
    }
}

export default Login