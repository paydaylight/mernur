import React from 'react'
import phone from '../assets/phone.png'
import whatsappLogo from '../assets/whatsapp.png'

class Address extends React.Component {
    render() {
        return(
            <div className="address-part">
                <div className="separator"></div>
                <strong>Мер-Нур</strong>
                <div className="row bar"></div>
                <label><a target="blank" href="http://2gis.kz/almaty/firm/9429940000800892/center/76.940445,43.250712/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">
                г. Алматы ул. Желтоксан, 134
                </a></label>
                <span className="small-text">(проезд во внутренний двор с парковкой)</span>
                <div className="brake"></div>
                <div className="phone-element">
                    <img src={phone} alt="phone" className="phone-normal"/>
                    <a href="tel:+77272728872">+7 (727) 272‒88‒72</a>
                </div>
                <div className="phone-element">
                    <img src={phone} alt="phone" className="phone-normal"/>
                    <a href="tel:+77272615319">+7 (727) 261‒53‒19</a>
                </div>
                <div className="phone-element">
                    <img src={phone} alt="phone" className="phone-normal"/>
                    <a href="tel:+77027954848">+7‒702‒795‒48‒48</a>
                </div>
                <div className="phone-element">
                    <img src={whatsappLogo} alt="phone" className="phone-wp"/>
                    <a href="tel:+77053747464">+7‒705‒374‒74‒64</a>
                </div>
            </div>    
        )
    }
}

export default Address