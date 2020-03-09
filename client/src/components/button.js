import React from 'react'

class Button extends React.Component {
    render() {
        return(
            <div>
                <button className={`btn-default${this.props.class ? ' ' + this.props.class : ''}`} onClick={this.props.event()}>{this.props.value}</button>
            </div>
            
        )
    }
}

export default Button