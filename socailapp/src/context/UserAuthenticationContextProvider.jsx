import  React from 'react';
import { useState } from 'react';
import UserAuthenticationContext from './UserAuthenticationContext';


const UserAuthenticationContextProvider = ({children})=>{
const [UserAuthenticationSuccessful,setUserAuthenticationSuccessful] = useState(false);
return(
    <UserAuthenticationContext.Provider value={{ UserAuthenticationSuccessful,setUserAuthenticationSuccessful}}>
{children}
    </UserAuthenticationContext.Provider>
)
}
export default UserAuthenticationContextProvider;