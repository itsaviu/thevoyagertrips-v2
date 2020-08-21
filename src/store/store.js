import React, { createContext, useContext, useReducer } from 'react';



const StoreContext = createContext();


const initialState = {isLoading: false};

const reducer = (state = initialState , action) => {
    switch(action.type) {
        case 'START_LOADING':
            return { isLoading: true };
        case 'STOP_LOADING':
            return { isLoading: false };
        default:
            return state;
    }
};



export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
};

export const useStore = () => useContext(StoreContext);
