import React, { useContext } from 'react';
import { str } from './Context';

const ReduxReactIndex = () => {
    const string = useContext(str)
    return (
        <h1>{string}</h1>
    )
}

export default ReduxReactIndex;
