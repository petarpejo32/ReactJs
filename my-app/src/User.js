import React from 'react'

class User extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div id='greeting' className='text'>
                    {this.props.name}
                    {this.props.email}
                </div>
                <div>first app</div>
            </React.Fragment>
        )
    }
}

export default User