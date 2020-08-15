import React, { createContext, useEffect, useState } from 'react';
import Component from './Component';
import axios from 'axios';
let photosArray = createContext([])


const Context = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json').then(res => {
            setData(res)
        })
    },[])

    return (
        <>
            <photosArray.Provider value={data}><Component /></photosArray.Provider>
        </>

    )
}

export default Context
export { photosArray }