import React from 'react';
import Cell from './cell'

class Banner extends React.Component {
    render() {
        return(
        <div className="banner">
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
                            <Cell value={378} key={i+10}></Cell>
                        </td>
                    </tr>
                )
            })}
            </div>
        ) 
    }
}

export default Banner