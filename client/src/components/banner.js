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
                { name: 'KGS', buy: 0, sell: 0 },
                { name: 'GBP', buy: -1, sell: 0 },
                { name: 'CNY', buy: 0, sell: 0 }
            ], 
            updated_at: Date.now().toString()
        }
    }
    ws = new WebSocket('ws://localhost:2222')

    componentDidMount() {
        this.ws.onopen = () => {
            // try{
            //     this.ws.send({message: "start"})
            // } catch(e) {
                
            // }
            console.log('open')
        }

        this.ws.onmessage = event => {
            const data = JSON.parse(event.data)
            console.log(data)

            this.setState({currencies: data.currencies.map(element => {
                return {name: element.name, buy: element.buy, sell: element.sell}
            })})
        }
    }

    render() {
        return(
            <div className="banner">
                <table>
                <tbody className="table">
                    {this.state.currencies.map((data) => {
                        return(
                            <tr>
                                <td>
                                    <Cell value={data.buy} key={data.name}></Cell>
                                </td>
                                <td className="currency-name">
                                    {data.name}
                                </td>
                                <td>
                                    <Cell value={data.sell} key={data.name+10}></Cell>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        ) 
    }
}

export default Banner