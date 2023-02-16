import react, { createContext, useState } from 'react';


export const LoginContext = createContext({
    isLoggedIn:true,
    type:"",
    Set_student:()=>{ },
    Set_tutor:()=>{ },
    Set_empty:()=>{},
    login: () => { },
    logout: () => { }
});

export const LoginProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [type, setType] = useState("");

    const login = () => {
        setIsLoggedIn(true);
    };
    const Set_student=()=>{
        setType("student");

    }
    const Set_tutor=()=>{
        setType("tutor");
    }
    const Set_empty=()=>{
        setType("");
    }

    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <LoginContext.Provider value={{type, isLoggedIn, login,Set_student,Set_tutor ,Set_empty}}>
            {props.children}
        </LoginContext.Provider>
    );
};

