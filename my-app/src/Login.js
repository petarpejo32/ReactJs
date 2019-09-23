import React from 'react'

class Login extends React.Component{ 
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
    }

    checkInput=()=>{
        const inputValue=event.target.value
        if(inputValue.indexOf('@')<=0){
            console.log("Ne bivat")
        }
        this.setState({[event.target.id]: inputValue})
    }
    submit=()=>{
        alert(this.state.username+' '+this.state.password)
    }
    savePwd=()=>{
        const inputValue=event.target.value
        if(inputValue.indexOf('@')<=0){
            console.log("Ne bivat")
        }
        this.setState({[event
    render (){
        return <React.Fragment>
            <input id='username' placeholder='Username' onChange={this.checkInput}/>
            <input id='password' placeholder='Password' onChange={this}/>
            <button id='submit' onClick={this.submit}>Log in</button>
        </React.Fragment>
}
}

export default Login