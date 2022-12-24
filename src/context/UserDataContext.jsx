import { createContext } from "react";

// axios-la backendden userin adini aliriq
const user_data = { name: 'ali', age: 12 }

export const USER_DATA_CONTEXT = createContext({})

const UserDataContext = ({children}) => {
    return (
        <USER_DATA_CONTEXT.Provider value={user_data}>
            {children}
        </USER_DATA_CONTEXT.Provider >
    )
}

export default UserDataContext;