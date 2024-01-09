
import {createContext} from "react";
import {Repository} from "../repo/Repository";

export const AppContext = createContext({
    repository: new Repository()
});

export default function AppProvider({children}) {
    const repo = new Repository()

    return (
        <AppContext.Provider value={{repository: repo}}>
            {children}
        </AppContext.Provider>
    );
}
