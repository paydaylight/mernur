import React from 'react'
import Loader from 'react-loader-spinner';

class Admin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currencies: [
                { name: 'USD', buy: 0, sell: 0, id: 'USD' }, 
                { name: 'EUR', buy: 0, sell: 0, id: 'EUR' },
                { name: 'RUB', buy: 0, sell: 0, id: 'RUB' },
                { name: 'GBP', buy: 0, sell: 0, id: 'GBP' },
                { name: 'KGS', buy: 0, sell: 0, id: 'KGS' },
                { name: 'CNY', buy: 0, sell: 0, id: 'CNY' },
                { name: 'CHF', buy: 0, sell: 0, id: 'CHF' }
            ],
            isLoading: false
        }
    }

    componentDidMount() {
        if(this.props.location.state === undefined || this.props.location.state.isLoggedIn !== true){
            this.props.history.push('/login')
        }

        fetch("https://kurs.mer-nur.kz/api/rates", {
            method: "GET",
            headers: new Headers({
              "Authorization": `Basic ${new Buffer(`${process.env.REACT_APP_USER}:${process.env.REACT_APP_PASSWORD}`).toString('base64')}`
            })
          }).then(response => {
            return response.json()
        }).then(data => {
            this.setState({currencies: data.currencies.map(element => {
                return {name: element.name, buy: element.buy, sell: element.sell, id: element._id}
            })
        })
        }).catch(err => console.log(err))
    }

    parseStateStringsToFloat = () => {
        return this.state.currencies.map((rate) => {
            return Object.assign(rate, {
                buy: parseFloat(rate.buy.toString().replace(",", ".")), 
                sell: parseFloat(rate.sell.toString().replace(",", "."))
            })
        })
    }

    submitData = (event) => {
        event.preventDefault();
        this.setState({isLoading: true}, () => {
            fetch("https://kurs.mer-nur.kz/api/rates", {
            method: "POST",
            headers: new Headers({
                "Authorization": `Basic ${new Buffer(`${process.env.REACT_APP_USER}:${process.env.REACT_APP_PASSWORD}`).toString('base64')}`,
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(this.parseStateStringsToFloat())
        }).then((res) => this.setState({isLoading: false})).catch(err => {
            this.setState({isLoading: false})
            alert(err)
        })
        })
        
    }

    saveSellValue = (e) => {
        const { currencies } = this.state
        const { id } = e.target
        currencies[id-10].sell = e.target.value
        this.setState({ currencies })
    }

    saveBuyValue = (e) => {
        const { currencies } = this.state
        const { id } = e.target
        currencies[id].buy = e.target.value
        this.setState({ currencies })
    }

    render() {
        return (
            <div>
                <div className="screen column back-1">
                    <div className="container">
                    <form onSubmit={this.submitData}>
                        <div className="banner">
                            
                            <table>
                                <tbody className="table">
                                    {this.state.currencies.map((data, i) => {
                                        return(
                                            <tr key={data.id}>
                                                <td>
                                                    <input className="cell input"  id={i} value={data.buy} onChange={this.saveBuyValue}></input>
                                                </td>
                                                <td className="currency-name">
                                                    {data.name}
                                                </td>
                                                <td>
                                                    <input className="cell input" id={i+10} value={data.sell} onChange={this.saveSellValue}></input>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        {/* <button className="btn-submit" onClick={() => this.submitData()}>СОХРАНИТЬ</button> */}
                        {this.state.isLoading ? 
                                        <div style={{textAlign: "center"}}>
                                            <Loader 
                                                type="ThreeDots" 
                                                color="#5fb053"
                                                height={60}
                                                width={60}
                                            />
                                        </div> : <input className="btn-submit" type="submit" value="СОХРАНИТЬ" />}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin