import './tablecomp.css';

const TableComp = ({
  arr,
  header,
  nameStyle,
  txtDataStyle,
  imgStyle,
  emailStyle,
  roleStyle,
}) => {
  return (
    <table className='table-cnt'>
      <thead className='table-hd'>
        <tr className='table-hd-tr'>
          {header.name ? (
            <th className='table-hd'>
              {' '}
              <p>{header.name}</p>{' '}
            </th>
          ) : null}
          {header.email ? (
            <th className='table-hd'>
              {' '}
              <p>{header.email}</p>
            </th>
          ) : null}
          {header.city ? (
            <th className='table-hd'>
              <p>{header.city}</p>
            </th>
          ) : null}

          {header.joining ? (
            <th className='table-hd'>
              <p> {header.joining}</p>
            </th>
          ) : null}
          {header.role ? (
            <th className='table-hd'>
              <p>{header.role}</p>
            </th>
          ) : null}
        </tr>
      </thead>
      <tbody className='table-body'>
        {arr &&
          arr.map((item) => {
            return (
              <tr className='table-body-name'>
                {' '}
                {item?.name && item?.img && (
                  <td className='table-body-data'>
                    <img src={item?.img} alt='' />
                    <p>{item?.name}</p>
                  </td>
                )}
                {item?.email && (
                  <td className='table-body-email'>
                    <p>{item?.email}</p>
                  </td>
                )}
                {item?.city && (
                  <td className='table-body-city'>
                    <p>{item.city}</p>
                  </td>
                )}
                {item?.joining && (
                  <td className='table-body-joining'>
                    <p>{item.joining}</p>{' '}
                  </td>
                )}
                {item?.role && (
                  <td className='table-body-role'>
                    <p> {item?.role}</p>
                  </td>
                )}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default TableComp;
