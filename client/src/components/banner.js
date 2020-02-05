import React from 'react';
import Cell from './cell'

class Banner extends React.Component {
    render() {
        return(
            <table className="banner">
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
        ) 
    }
}

export default Banner