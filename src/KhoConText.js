import React, { createContext, useState } from 'react'

const KhoChua = createContext();

export const DataProviderApp = ({ children }) => {
    const [xemay, setxemay] = useState([{
        key: "xe 2 banh",
        value: "xe mini"
    },
    {
        key: "xe 2 banh",
        value: "xe nhat"
    }
    ])
    // data
    const [xeOto, setxeOto] = useState([{
        key: "xe 4 banh",
        value: "lambo"
    },
    {
        key: "xe 4 banh",
        value: "vin Fast"
    }
    ])

    const themXeContext = (data) => {
        setxemay((prev) => {
            return (
                [...prev, data])
            // prev.push(data)
        })
    }
    return (
        <KhoChua.Provider value={{ xemay, xeOto, themXeContext }}>
            {children}
        </KhoChua.Provider>
    )
}

export default KhoChua;