import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from "../components/Helmet/Helmet";
import "../styles/auth.css";

const Login = () => {

  return (
    <Helmet title="Login">
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/home" className='form1'>
                <p>
                    <label>Email address</label><br/>
                    <input className="inp" type="text" name="email" required id='email' />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input className="inp" type="password" name="password" required id='password' />
                </p>
                <p>
                    <button id="sub_btn" name='send' type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    </Helmet>
  )
};
export default Login;

