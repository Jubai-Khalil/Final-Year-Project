import { createContext, useContext, useEffect, useReducer } from "react";

// Define the initial state using values from localStorage if available.
const initialState = {
    // retrieve 'user' from localStorage if it exists, otherwise default to null.
    user: localStorage.getItem('user') != undefined ? JSON.parse(localStorage.getItem('user')): null,
    // Retrieve 'role' from localStorage or default to null.
    role: localStorage.getItem('role') || null,
    // Retrieve 'token' from localStorage or default to null.
    token: localStorage.getItem('token') || null,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
    switch(action.type) {
        // Handle the start of a login process.
        case 'LOGIN_START':
            return {
                user:null,
                role:null,
                token:null,
            }

        // Handle successful login by setting user, role, and token based on action payload.
        case 'LOGIN_SUCCESS':
            return {
                user:action.payload.user,
                role:action.payload.role,
                token:action.payload.token,
            }
        // Handle logout by resetting user, role, and token to null.
        case 'LOGOUT':
            return {
                user:null,
                role:null,
                token:null,
            }
        
        default:
            return state;
    }
};

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(state.user));
        localStorage.setItem('token', state.token);
        localStorage.setItem('role', state.role);
        }, [state])

    // Render the provider with the current state and dispatch function.
    return <authContext.Provider value = {{user:state.user, token:state.token, role:state.role, dispatch}}>
        {children}
    </authContext.Provider>
}
