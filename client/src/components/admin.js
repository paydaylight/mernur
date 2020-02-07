import React from 'react'
import InputCell from '../components/inputCell'

class Admin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currencies: [
                { name: 'USD', buy: 0, sell: 0 }, 
                { name: 'EUR', buy: 0, sell: 0 },
                { name: 'RUB', buy: 0, sell: 0 },
                { name: 'KGS', buy: 0, sell: 0 },
                { name: 'GBP', buy: 0, sell: 0 },
                { name: 'CNY', buy: -1, sell: 0 }
            ]
        }
    }

    componentDidMount() {
        fetch("http://localhost:5000/admin/rates", {headers: { authorization: "Basic cGJvYWRtaW46YmFoYW5kaUJ1cmdlcno=" }}).then(event => {
            const data = JSON.parse(event.data)

            this.setState({currencies: data.currencies.map(element => {
                    return {name: element.name, buy: element.buy, sell: element.sell}
                })
            })
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <div className="screen column back-1">
                    <div className="container">
                        <div className="banner">
                            <table>
                                <tbody className="table">
                                    {this.state.currencies.map((data) => {
                                        return(
                                            <tr>
                                                <td>
                                                    <InputCell value={data.buy} key={data.name}></InputCell>
                                                </td>
                                                <td className="currency-name">
                                                    {data.name}
                                                </td>
                                                <td>
                                                    <InputCell value={data.sell} key={data.name+10}></InputCell>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <button className="btn-submit">ОТПРАВИТЬ</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin