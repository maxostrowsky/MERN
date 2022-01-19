import React, { Component } from 'react'

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.props={
            age: this.props.age
        }
    }
    ageHandler =() =>{
        this.setState({
            age: this.state.age +1
        })
    }
    render() {
        return (
            <><h1>{this.props.lastname}, {this.props.firstname}</h1><p>Age: {this.state.age}</p> <p>Hair Color: {this.props.haircolor}</p>
            <button onCLick={this.ageHandler}>Happy Birthday</button></>
        )
    }
}

export default PersonCard