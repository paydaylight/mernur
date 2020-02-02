import React from 'react';
import Cell from './cell'

class Banner extends React.Component {
    render() {
        return(
        <div className="banner">
            {['USD', 'EUR', 'RUB', 'KGS', 'GBP', 'CNY'].map(data => {
                return(
                    <tr>
                        <td>
                            <Cell value={376}></Cell>
                        </td>
                        <td className="currency-name">
                            {data}
                        </td>
                        <td>
                            <Cell value={378}></Cell>
                        </td>
                    </tr>
                )
            })}
            </div>
        ) 
    }
}

export default Banner