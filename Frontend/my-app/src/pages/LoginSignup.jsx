import React, { useState } from 'react'
import Login from '../Components/login/login'
import Signup from '../Components/signup/Signup'

// const LoginSignup = () => {
//   return (
//     <div>
//       <Login/>
//       <Signup/>
//     </div>
//   )
// }

// export default LoginSignup


const LoginSignup = ({ handleLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="app-container">
      {isLogin ? <Login toggleAuthMode={toggleAuthMode} handleToken={handleLogin} /> : <Signup toggleAuthMode={toggleAuthMode} handleToken={handleLogin} />}
    </div>
  );
};

export default LoginSignup;

