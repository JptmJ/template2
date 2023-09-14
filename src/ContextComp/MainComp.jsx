import React, { useContext } from 'react';
import { AppContext } from './CompA';

const MainComp = () => {
    const context = useContext(AppContext);
    return (
        <>
            <h1>
                This content is {context}
            </h1>
        </>
    )
}

export default MainComp;
