import React from 'react'
import PropTypes from 'prop-types'
const User = (props) => {
    return (
        <div>
            <h2>This is User component</h2>
            <h2>Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
        </div>
    )
}

User.Proptypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}
const EX = () => {
    return (
        <div>
            <User name={'Narasimha'} age={"27"} />
        </div>
    )
}

export default EX