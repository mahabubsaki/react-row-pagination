import { format } from 'date-fns';
import React from 'react';

const TableRows = ({ index, orderId, customerName, deliveryType, email, price, date }) => {
    return (
        <tr>
            <th>{index}</th>
            <td>{customerName}</td>
            <td className='font-bold'>{orderId}</td>
            <td>{deliveryType}</td>
            <td>{email}</td>
            <td>${price}</td>
            <td>{format(new Date(date), 'PPP')}</td>
        </tr>
    );
};

export default TableRows;