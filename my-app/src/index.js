import ReactDOM from 'react-dom'
import React from 'react'
import User from './User'
import Heading from './Heading'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'

const app=document.getElementById('app')
const Menu = () =>{
    return(
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About us</Link>
            </li>
            <li>
                <Link to='/contact'>Contact us</Link>
            </li>
            <li>
                <Link to='/login'>Log in</Link>
            </li>
            <li>
                <Link to='/user'>User</Link>
            </li>
        </ul>
    )
}
const Home = () =>{
    return(<h1>Home</h1>)
}
const About = () =>{
    return(<h1>About</h1>)
}

const Contact = () =>{
    return(<h1>Contact</h1>)
}

const Login = () =>{
    return(<h1>Login</h1>)
}



const Routes = () => {
    return(
        <Router>
            <Menu/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/login' component={Login}/>  
                <Route exact
                path='/user'
                render={(props) =>
                    
                    <React.Fragment>
                        <User {...props}/>
                        <Heading {...props}/>
                    </React.Fragment>
                }
                />   
            </Switch>

        </Router>
    )
}

// const Container=()=>{
//     return(
//         <React.Fragment>
//         <User/>
//         <Heading/>
//         </React.Fragment>
//     )
// }
ReactDOM.render(<Routes/>, app)