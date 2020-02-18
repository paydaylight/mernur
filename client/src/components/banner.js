import React from 'react';
import Cell from './cell'

class Banner extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currencies: [
                { name: 'USD', buy: 0, sell: 0 }, 
                { name: 'EUR', buy: 0, sell: 0 },
                { name: 'RUB', buy: 0, sell: 0 },
                { name: 'GBP', buy: 0, sell: 0 },
                { name: 'KGS', buy: 0, sell: 0 },
                { name: 'CNY', buy: 0, sell: 0 },
                { name: 'CHF', buy: 0, sell: 0 }
            ], 
            updated_at: null
        }

        this.formatter = new Intl.DateTimeFormat("ru", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        });
    }

    ws = new WebSocket('wss://mer-nur.kz/data')

    componentDidMount() {
        this.ws.onopen = () => {
            // try{
            //     this.ws.send({message: "start"})
            // } catch(e) {
                
            // }
        }

        this.ws.onmessage = event => {
            const data = JSON.parse(event.data)

            this.setState({currencies: data.currencies.map(element => {
                return {name: element.name, buy: element.buy, sell: element.sell}
            }), updated_at: new Date(data.updated_at).getTime()})
            
        }
    }

    render() {
        return(
            <div>
                <div className="banner">
                    <table>
                    <tbody className="table">
                        {this.state.currencies.map((data) => {
                            return(
                                <tr key={data.name}>
                                    <td>
                                        <Cell value={data.buy}></Cell>
                                    </td>
                                    <td className="currency-name">
                                        {data.name}
                                    </td>
                                    <td>
                                        <Cell value={data.sell}></Cell>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                
                </div>
                {this.state.updated_at ? <label className="date">на {this.formatter.format(this.state.updated_at)}</label> : ''}
            </div>
        ) 
    }
}

export default Banner