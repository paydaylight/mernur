import React from 'react'

class Address extends React.Component {
    render() {
        return(
            <div className="address-part">
                <strong>Мер-Нур</strong>
                <div className="row bar"></div>
                <label><a href="http://2gis.kz/almaty/firm/9429940000800892/center/76.940445,43.250712/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">
                г. Алматы ул. Желтоксан, 134
                </a></label>
                <br/>
                <label><a href="tel:+77015557828">+77015557828</a></label>
                <label><a href="tel:+77015557828">+77015557828</a></label>
                <label><a href="tel:+77015557828">+77015557828</a></label> 
            </div>    
        )
    }
}

export default Address