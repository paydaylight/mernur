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
                    <h2>ОБМЕН ВАЛЮТ</h2>
                </div>
                <div className="right">
                    
                    <Button value="АДРЕС" class="right-aligned" event={this.props.event}></Button>
                    {/* <Button value="НА ГЛАВНУЮ" class="right-aligned" event={() => window.location.href = "https://mernurkz.tilda.ws/"}></Button> */}
                    <div><a className="btn-link right-aligned" href="https://mernurkz.tilda.ws/">ГЛАВНАЯ</a></div>
                </div>
                
            </div>   
        )
    }
}

export default Navbar