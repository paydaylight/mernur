import React from 'react'

class Address extends React.Component {
    render() {
        return(
            <div className="address-part">
                <div>АДРЕС</div>
                <ul>
                    <li>Жельтоксан, 134</li>
                </ul> 
                <div>КОНТАКТЫ</div>
                <ul>
                    <li>87015557828</li>
                    <li>87015557828</li>
                    <li>87015557828</li>
                </ul> 
                <div>РЕЖИМ РАБОТЫ</div>
                <ul>
                    <li>с понедельника по пятницу - с 8:00 до 19:00</li>
                    <li>с суббота - с 10:00 до 17:00</li>
                    <li>воскресенье - выходной</li>
                </ul>   
            </div>    
        )
    }
}

export default Address