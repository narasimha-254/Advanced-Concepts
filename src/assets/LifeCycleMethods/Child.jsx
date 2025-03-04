import React, { Component } from 'react'

class Child extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            product: null
        }
        console.log('inside constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log("inside get derived")
        // return null
        return { ...state, count: props.data + 10 }

    }
    shouldComponentUpdate() {
        console.log("inside should component update")
        return true;
    }



    getSnapshotBeforeUpdate(prevprops, prevstate) {
        console.log("inside get snapshot")
        return null;
    }
    componentDidUpdate() {
        console.log("inside did update")
    }

    componentDidMount() {
        console.log('did mount')
        fetch('https://fakestoreapi.com/products/1')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({ ...this.state, product: json.title })
            })
    }
    render() {
        console.log('render')
        return (
            <>
                <h1>Child : {this.props.data}</h1>
                <h2>{this.state.count}</h2>
                <h2>Product Name: {this.state.product}</h2>
            </>
        )
    }
    componentWillUnmount(){
        console.log('inside will unmount')
    }
}

export default Child;