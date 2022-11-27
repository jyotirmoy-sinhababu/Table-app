import React from 'react';

const TableComp = ({ arr, header }) => {
  return (
    <table className='table-cnt'>
      <thead>
        <tr>
          {header.name ? <th>{header.name}</th> : null}
          {header.email ? <th>{header.email}</th> : null}
          {header.city ? <th>{header.city}</th> : null}

          {header.joining ? <th>{header.joining}</th> : null}
          {header.role ? <th>{header.role}</th> : null}
        </tr>
      </thead>
      <tbody>
        {arr &&
          arr.map((item) => {
            return (
              <tr>
                {item?.name && item?.img && (
                  <td>
                    <img src={item?.img} alt='avataar' /> {item?.name}
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
