import React from 'react'
import User from './User'
import Error from './Error'
import axios from 'axios'

class Wrapper extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data:[],
            error:null,
            loading:false
        }
    }

    componentDidMount () {
        this.setState.setState({loading:true})
        axios.get(<this.props.url/>)
            .then((response) => {
                
                this.setState({ data: response.data,loading:false })
            })
            .catch((error) => {
                this.setState({ data: <Error />,loading:false })
            })
    }
    
    render () {
        return (
            <React.Fragment>
                <this.props.component data={this.state.data}/>
                {this.state.error}
                {this.setState.loading && <div>loading...</div>}
            </React.Fragment>
        )
    }
}

export default Wrapper