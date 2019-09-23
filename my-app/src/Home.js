import React from 'react'

class Home extends React.Component{
    constructor(){
        super()
        this.state={
            show: false
        }
    }

    showOrHide=()=>{
       this.setState({show: !this.state.show})
    }

    render(){       
        return <React.Fragment>
        <button id='toggle' onClick={this.showOrHide}>toggle!</button>
        {this.state.show ? <div>Hello</div> :null}
        </React.Fragment>
        }

}
export default Home