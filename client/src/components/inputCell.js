import React from 'react'

class InputCell extends React.Component {
    componentDidMount() {
        console.log(this.props.value)
    }
    render() {
        return(
            <input className="cell input" placeholder={this.props.value}>
            </input>
        )
    }
}

export default InputCell