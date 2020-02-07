import React from 'react';
import Cell from './cell'

class Banner extends React.Component {
    ws = new WebSocket('ws://localhost:3000/ws')

    componentDidMount() {
        this.ws.onopen = () => {
            try{
                this.ws.send({message: "start"})
            } catch(e) {
                
            }
            
        }

        this.ws.onmessage = event => {
            const data = JSON.parse(event.data)
        }
    }

    render() {
        return(
            <div className="banner">
                <table>
                <tbody>
                    {['USD', 'EUR', 'RUB', 'KGS', 'GBP', 'CNY'].map((data, i) => {
                        return(
                            <tr>
                                <td>
                                    <Cell value={376} key={i}></Cell>
                                </td>
                                <td className="currency-name">
                                    {data}
                                </td>
                                <td>
                                    <Cell value={378} key={data}></Cell>
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