import axios from "axios";
import { api } from "./config";  // Adjust the path as necessary
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
    const [user, setUser] = useState(null);
    const api = process.env.REACT_APP_API_URL; // Access the environment variable

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const result = await axios.get(`${api}/auth/me`, {
                    withCredentials: true,
                });
                setUser(result.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchUser();
    }, []);

    return (
        <GlobalContext.Provider value={{ user, setUser }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;

export function useGlobal() {
    return useContext(GlobalContext);
}
