import React from 'react'

class Admin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currencies: [
                { name: 'USD', buy: 0, sell: 0, id: 0 }, 
                { name: 'EUR', buy: 0, sell: 0, id: 1 },
                { name: 'RUB', buy: 0, sell: 0, id: 2 },
                { name: 'KGS', buy: 0, sell: 0, id: 3 },
                { name: 'GBP', buy: 0, sell: 0, id: 4 },
                { name: 'CNY', buy: 0, sell: 0, id: 5 }
            ]
        }
    }

    componentDidMount() {
        fetch("https://mer-nur.kz/api/rates", {
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

    submitData = () => {
        fetch("https://mer-nur.kz/api/rates", {
            method: "POST",
            headers: new Headers({
                "Authorization": `Basic ${new Buffer(`${process.env.REACT_APP_USER}:${process.env.REACT_APP_PASSWORD}`).toString('base64')}`,
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(this.state.currencies)
        })
    }

    saveSellValue = (e) => {
        console.log("sell", e.target.value)
        const { currencies } = this.state
        const { id } = e.target
        currencies[id-10].sell = e.target.value
        this.setState({ currencies })
    }

    saveBuyValue = (e) => {
        console.log("sell", e.target.value)
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
                    <form>
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
                        <button className="btn-submit" onClick={() => this.submitData()}>СОХРАНИТЬ</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin