import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({
        name: 'hablu',
        email: 'hablu@gamil.com'
    });



    const authInfo = {
        user,
        setUser
    }


    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;