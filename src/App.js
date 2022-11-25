import './App.css';

import TableComp from './component/table/TableComp';

import { data } from './component/utils/JasonData';

function App() {
  data.map((item) => {
    return console.log(item);
  });

  return (
    <div className='App'>
      <TableComp />
    </div>
  );
}

export default App;
