import { createContext } from "react";

export const UserContext = createContext();

export function UserProvider({childre}){

    const[user, setUser] = useState({
        name: "Carlos",
        email: "biniza@gmail.com",
    });

    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}