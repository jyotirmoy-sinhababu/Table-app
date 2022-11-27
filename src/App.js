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
        <TableComp arr={loopData} header={firstTableHead} />
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
