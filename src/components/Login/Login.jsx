import '../Login/Login.css'
import { addData } from '../../features/cricket/cricketSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const userData = {
    name: "Guest user",
    email: "guest@gmail.com",
    password: "12345678",
    mobile: "+1234567890",
    teamName: "Guest -11",
    address: "123 Main St, City, Country",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  };
  const [name, setname] = useState();
  const [password, setpassword] = useState();

  const loginUser = async () => {
    await dispatch(addData({
      name: name,
      password: password,
      email: `${name}@gmail.com`,
      mobile: "+1234567890",
      teamName: "Guest -11",
      address: "123 Main St, City, Country",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }))
    if (name.length > 0) {
      navigate('/');
    }
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const guestUser = async () => {
    await dispatch(addData(userData))
    navigate('/');
  }
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Please log in to continue</p>
        </div>
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" onChange={(e) => setname(e.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" onChange={(e) => setpassword(e.target.value)} />
          </div>
          <button className="login-button" onClick={loginUser}>Login</button>
          <button className="login-button" onClick={guestUser}>Get Guest user cridentials</button>
          <div className="login-options">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
