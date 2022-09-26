import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react';
import KhoChua from './KhoConText'
import XeOto from './XeOto';

function App() {

  const data = useContext(KhoChua)
  console.log(data)
  const {xemay} = data

  const themXe = (data) => {
    setxemay((prev) => {
        return (
            [...prev, data])
        // prev.push(data)
    })
}


  // xemay = data.xemay
  return (
    <div className="App">
      <h1>Các loại xe máy </h1>

   {
    xemay.map(e=>{
      return <h1>{e.value}</h1>
    })
   } 

    <h1>Nhap xe can them </h1>

    <input  placeholder='them xe may ' />
    <button>Them </button>

      <h2> Đây là xe ô tô </h2>

      <XeOto props ={themXe}/>
    </div>
  );
}

export default App;
