import React, { Component } from 'react'
import Child from './Child';

class Appp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 10
            ,show:true
        }
    }
    render() {
        return (
            <>
                React Component Life Cycle Methods
                <h3>Parent Appp</h3>
                {this.state.show && <Child data= {this.state.x}/>}
                <button onClick={()=>{this.setState({show:false})}}>hide</button>
                <button onClick={()=>{this.setState({show:true})}}>show</button>
                <button onClick={() => { this.setState({ x: this.state.x + 10 }) }}>Click</button>
            </>
        )
    }
}
export default Appp;