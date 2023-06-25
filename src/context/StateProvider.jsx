import React, { createContext, useEffect, useState } from 'react';

export const MainContext = createContext({});

const StateProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const values = {
        data, setData
    };
    useEffect(() => {
        (async function () {
            const response = await fetch('/data.json');
            const data = await response.json();
            setData(data);
        })();
    }, []);
    return (
        <MainContext.Provider value={values}>
            {children}
        </MainContext.Provider>
    );
};

export default StateProvider;