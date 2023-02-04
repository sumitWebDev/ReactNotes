import { createContext } from "react";

const UserContext = createContext({user:{
    name: "Dummy Name",
    email: "dummy@gmail.com"
}})

UserContext.displayName = 'User Context';

export const TestContext = createContext('dark')

UserContext.displayName = 'Test Context';

export default UserContext;