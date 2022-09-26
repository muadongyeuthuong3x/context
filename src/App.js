import logo from './logo.svg';
import './App.css';
import React, { useContext ,useState } from 'react';
import KhoChua from './KhoConText'
import XeOto from './XeOto';

function App() {
  const data = useContext(KhoChua)
  const { xemay, themXeContext } = data
  const [stateXe, setstateXe] = useState({ key: '', value: '' }); // tao them xe 
  const createXe = (e) => {
    setstateXe({
      key: e.target.value,
      value: e.target.value,
    })
  }
  const onClickTao = () => {
    themXeContext(stateXe)
  }
  return (
    <div className="App">
      <h1>Các loại xe máy </h1>
      {
        xemay.map(e => {
          return <h1>{e.value}</h1>
        })
      }
      <h1>Nhap xe can them </h1>

      <input placeholder='them xe may ' value={stateXe.value} onChange={createXe} />
      <button onClick={onClickTao}>Them </button>
      <h2> Đây là xe ô tô </h2>
      <XeOto  />
    </div>
  );
}

export default App;
