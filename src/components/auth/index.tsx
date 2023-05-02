import React, { useState } from "react";
import RegisterPage from "./register/register";
import LoginPage from "./login/login";
const AuthRootComponent: React.FC = ():JSX.Element => {
  const [email, setEmail] = useState(initialState: '')
  const [password, setPassword] = useState(initialState: '')
  const handleSubmit = async (e:{preventDefault: () => void;}) => {
    e.preventDefault()
    console.log(email)
  };
  return( 
  <div>
    <form onSubmit={handleSubmit}><div>{location.pathname === '/login' ? <LoginPage setEmail={setEmail} setPassword={setPassword}/> : location.pathname === '/register' ? <RegisterPage /> : null}</div></form>
  </div>);
};

export default AuthRootComponent;
