import React from 'react';

function Table(props) {
  return (
    <div>
            <div className='tbody'>
      <table className='table'>
        <thead className='thead'>
          <tr>
            <th>#</th>
            <th>Platform</th>
            <th>Last Traded Price</th>
            <th>Buy / Sell Price</th>
            <th>Volume</th>
            <th>Base Unit</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((element, index) => (
            <tr key={index} style={{ borderBottom: '20px solid #191d28' }}>
              <td>{index+1}</td>
              <td>{element.name}</td>
              <td>{'₹ '+element.last}</td>
              <td>{'₹ '+ element.buy + '/' + element.sell}</td>
              <td>{element.vlm}</td>
              <td>{element.base_unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
    </div>
  );
}

export default Table;
