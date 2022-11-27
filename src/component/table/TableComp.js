import React from 'react';

const TableComp = ({ arr, header }) => {
  return (
    <table className='table-cnt' style={{ width: '100%' }}>
      <thead>
        <tr>
          {header.name ? <th>{header.name}</th> : null}
          {header.email ? <th>{header.email}</th> : null}
          {header.role ? <th>{header.role}</th> : null}
          {header.joining ? <th>{header.joining}</th> : null}
          {header.city ? <th>{header.city}</th> : null}
        </tr>
      </thead>
      <tbody>
        {arr &&
          arr.map((item) => {
            return (
              <tr>
                {item?.name && item?.img && (
                  <td>
                    {item?.name} {item?.img}
                  </td>
                )}
                {item?.email && <td>{item?.email}</td>}
                {item?.role && <td>{item?.role}</td>}
                {item?.city && <td>{item.city}</td>}
                {item?.joining && <td> {item.joining} </td>}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default TableComp;
