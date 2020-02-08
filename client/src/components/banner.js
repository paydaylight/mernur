import React from 'react';
import Cell from './cell'
import moment from 'moment'
moment.locale('ru')

class Banner extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currencies: [
                { name: 'USD', buy: 0, sell: 0 }, 
                { name: 'EUR', buy: 0, sell: 0 },
                { name: 'RUB', buy: 0, sell: 0 },
                { name: 'KGS', buy: 0, sell: 0 },
                { name: 'GBP', buy: 0, sell: 0 },
                { name: 'CNY', buy: 0, sell: 0 }
            ], 
            updated_at: null
        }
    }
    ws = new WebSocket('ws://localhost:2222')

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
            }), updated_at: moment(data.updated_at).format('MMMM Do YYYY, h:mm:ss')})
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
                {this.state.updated_at ? <label className="date">на {this.state.updated_at}</label> : ''}
            </div>
        ) 
    }
}

export default Banner