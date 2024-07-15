import React ,{ useState } from 'react'
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


const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="app-container">
      {isLogin ? <Login toggleAuthMode={toggleAuthMode} /> : <Signup toggleAuthMode={toggleAuthMode} />}
    </div>
  );
};

export default LoginSignup;

