import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react';
import KhoChua from './KhoConText'

function XeOto() {
    const data = useContext(KhoChua)
    console.log(data)
    const { xeOto } = data

    return (
        <div className="App">
            <h1>Các loại xe o to  </h1>
            {
                xeOto.map(e => {
                    return <h1>{e.value}</h1>
                })
            }

        </div>
    );
}

export default XeOto;
