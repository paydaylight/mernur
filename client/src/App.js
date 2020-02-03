import React from 'react';
import logo from './logo.svg';
import './App.css';
import './hooks/use_script'
import Banner from './components/banner'
import Navbar from './components/navbar'
import Address from './components/address'
import useScript from './hooks/use_script';
import useDGWidgetLoader from './hooks/use_dg_widget_loader'

class App extends React.Component {
  // useScript("https://widgets.2gis.com/js/DGWidgetLoader.js");
  // useDGWidgetLoader(new DGWidgetLoader({"width":640,"height":600,"borderColor":"#a3a3a3","pos":{"lat":43.250712,"lon":76.940445,"zoom":16},"opt":{"city":"almaty"},"org":[{"id":"9429940000800892"}]}))
  // return (
  //   // <div className="App">
  //   //   <a class="dg-widget-link" href="http://2gis.kz/almaty/firm/9429940000800892/center/76.940445,43.250712/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">
  //   //     Посмотреть на карте Алматы
  //   //   </a>
  //   //   <div class="dg-widget-link">
  //   //     <a href="http://2gis.kz/almaty/center/76.940445,43.250712/zoom/16/routeTab/rsType/bus/to/76.940445,43.250712╎Мер-Нур, обменный пункт?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">
  //   //       Найти проезд до Мер-Нур, обменный пункт
  //   //     </a>
  //   //   </div>
  //   //   {/* <script charset="utf-8" src="https://widgets.2gis.com/js/DGWidgetLoader.js">
  //   //   </script>
  //   //   <script charset="utf-8">{}
  //   //   </script> */}
  //   //   <noscript style="color:#c00;font-size:16px;font-weight:bold;">
  //   //     Виджет карты использует JavaScript. Включите его в настройках вашего браузера.
  //   //   </noscript>
  //   // </div>
  // );

  constructor(props){
    super(props)
    this.addressView = React.createRef()
  }

  handleOnClick = (event) => {
    //.current is verification that your element has rendered
    
    console.log(this.addressView)
    if(this.addressView.current){
        this.addressView.current.scrollIntoView({ 
           behavior: "smooth", 
           block: "nearest"
        })
    }else{
      alert('fart')
    }
  }

  render() {
    return(
      <div>
        <div className="parent"><Navbar event={() => this.handleOnClick}></Navbar></div>
        
        <div className="main">
          <Banner></Banner>
        </div>
        <div className="main" ref={this.addressView}>
          <Address></Address>
        </div>
      </div>
    )
  }
}

export default App;
