import { useEffect, useState } from 'react';
import './App.css';

import TableComp from './component/table/TableComp';

import { data } from './component/utils/JasonData';

function App() {
  const [loopData, setLoopData] = useState([]);
  const [secondLoopData, setSecondLoopData] = useState([]);
  const [thirdLoopData, setThirdLoopData] = useState([]);

  const firstTableHead = { name: 'Name', email: 'Email Address', role: 'Role' };
  const secondTableHead = {
    name: 'Email Address',
    joining: 'Joining Date',
    role: 'Role',
  };
  const thirdTableHead = {
    name: 'Name',
    city: 'City',
    joining: 'Joining Date',
    role: 'Role',
  };

  //style of first table
  const nameStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '8px 10px',
    gap: '10px',
    position: 'absolute',
    width: '175px',
    height: '40px',
    left: '0px',
    top: '40px',
    background: '#F5F5F5',
    borderWidth: '0px 1px 1px 1px',
    borderStyle: 'solid',
    borderColor: ' #E1E1E1',
  };

  const emailStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '8px 10px',
    gap: '10px',
    position: 'absolute',
    width: '220px',
    height: '40px',
    left: '175px',
    top: '40px',
    background: '#F5F5F5',
    borderWidth: '0px 1px 1px 0px',
    borderStyle: 'solid',
    borderColor: '#E1E1E1',
  };

  const roleStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: ' 8px 10px',
    gap: '10px',
    position: 'absolute',
    width: '175px',
    height: '40px',
    left: '395px',
    top: '40px',
    background: '#F5F5F5',
    borderWidth: '0px 1px 1px 0px',
    borderStyle: 'solid',
    borderColor: '#E1E1E1',
  };

  const joiningStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '8px 10px',
    gap: '10px',
    position: 'absolute',
    width: '175px',
    height: '40px',
    left: '220px',
    top: '80px',
    background: '#FFFFFF',
    borderWidth: '0px 1px 1px 0px',
    borderStyle: 'solid',
    borderColor: '#E1E1E1',
  };

  const cityStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '8px 10px',
    gap: '10px',
    position: 'absolute',
    width: '175px',
    height: '40px',
    left: '175px',
    top: '40px',
    background: '#F5F5F5',
    borderWidth: '0px 1px 1px 0px',
    borderStyle: 'solid',
    borderColor: '#E1E1E1',
  };

  const imgStyle = {
    boxSizing: 'border-box',
    width: '25px',
    height: '25px',
    background: 'url()',
    border: '1px solid #747474',
    borderRadius: '40px',
    flex: 'none',
    order: '0',
    flexGrow: '0',
  };

  const txtDataStyle = {
    width: '69px',
    height: '24px',
    fontFamily: 'Noto Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '170%',
    color: '#383838',
    flex: 'none',
    order: '1',
    flexGrow: '0',
  };

  useEffect(() => {
    if (data) {
      setLoopData(
        data.map((item) => {
          return {
            name: item?.person?.name,
            email: item?.email,
            role: item?.role,
            img: item?.person?.avatar,
          };
        })
      );
      setSecondLoopData(
        data.map((item) => {
          return {
            email: item?.email,
            joining: item?.joiningDate,
            role: item?.role,
          };
        })
      );
      setThirdLoopData(
        data.map((item) => {
          return {
            name: item?.person?.name,
            joining: item?.joiningDate,
            city: item?.city,
            role: item?.role,
            img: item?.person?.avatar,
          };
        })
      );
    }
  }, []);
  return (
    <div className='App'>
      <div>
        <TableComp
          nameStyle={nameStyle}
          txtDataStyle={txtDataStyle}
          imgStyle={imgStyle}
          arr={loopData}
          header={firstTableHead}
          emailStyle={emailStyle}
          roleStyle={roleStyle}
        />
      </div>
      <div>
        <TableComp arr={secondLoopData} header={secondTableHead} />
      </div>
      <div>
        <TableComp arr={thirdLoopData} header={thirdTableHead} />
      </div>
    </div>
  );
}

export default App;
