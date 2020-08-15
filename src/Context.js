import React from 'react';
import { createContext } from 'react';
import ReduxReactIndex from './reduxreactindex';

const str=createContext()

const Context = () => {
    return (
        <>
            <str.Provider value={"String"}>
                <ReduxReactIndex/>
            </str.Provider>
        </>
    )
}

export default Context;
export {str}