import React from 'react'

class Address extends React.Component {
    render() {
        return(
            <div className="address-part">
                <div className="parts">АДРЕС</div>
                <ul>
                    <li><a href="http://2gis.kz/almaty/firm/9429940000800892/center/76.940445,43.250712/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">
                    г. Алматы ул. Желтоксан, 134
                    </a></li>
                </ul>
                    
                <div className="parts">КОНТАКТЫ</div>
                <ul>
                    <li><a href="tel:+77015557828">+77015557828</a></li>
                    <li><a href="tel:+77015557828">+77015557828</a></li>
                    <li><a href="tel:+77015557828">+77015557828</a></li>
                </ul> 
                <div className="parts">РЕЖИМ РАБОТЫ</div>
                <ul>
                    <li>пн.- пт. с 8:00 до 19:00</li>
                    <li>сб. с 10:00 до 17:00</li>
                    <li>вс - выходной</li>
                </ul>   
            </div>    
        )
    }
}

export default Address