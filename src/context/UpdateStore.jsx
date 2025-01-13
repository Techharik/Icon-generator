import { createContext, useState } from "react";

export const IconContext = createContext(null);

export const IconContextProvider = ({ children }) => {
    const [iconUpdates, setIconUpdate] = useState({});

    return (
        <IconContext.Provider value={{ iconUpdates, setIconUpdate }}>
            {children}
        </IconContext.Provider>
    );
};
