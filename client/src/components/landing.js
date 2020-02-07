import React from 'react';
import Banner from '../components/banner'
import Navbar from '../components/navbar'
import Address from '../components/address'
import Map from '../components/map'

class Landing extends React.Component {
  constructor(props){
    super(props)
    this.addressView = React.createRef()
  }

  handleOnClick = (event) => {
    if(this.addressView.current){
        this.addressView.current.scrollIntoView({ 
           behavior: "smooth", 
           block: "nearest"
        })
    }
  }

  render() {
    return(
      <div>
        <div className="parent">
          <Navbar event={() => this.handleOnClick}></Navbar>
        </div>
        <div className="screen column back-1">
          <Banner></Banner>
        </div>
        <div className="screen row back-2" ref={this.addressView}>
            <Map></Map>
            <Address></Address>
        </div>
      </div>
    )
  }
}

export default Landing;