import React from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    return (
        <>
            <AppContext.Provider value={"Retrieved by useContext"}>
                {children}
            </AppContext.Provider>

        </>
    );
};

export { AppContext, AppProvider };
