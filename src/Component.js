import React, { useContext } from 'react';
import { photosArray } from './Context';



const Component = () => {
    const apidata = useContext(photosArray)
    return (
        <>

            {console.log(apidata)}
        </>
    )

}

export default Component