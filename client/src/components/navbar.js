import React from 'react'
import Button from './button'

class Navbar extends React.Component {
    render() {
        return(
            <div className="navbar">
                <div className="left">
                <div className="empty"></div>
                </div>
                <div className="center">
                    <h1>Мер-Нур</h1>
                    <h2>обмен валют</h2>
                </div>
                <div className="right">
                    <div className="empty"></div>
                    <Button value="АДРЕС" class="right-aligned" event={this.props.event}></Button>
                </div>
                
            </div>   
        )
    }
}

export default Navbar