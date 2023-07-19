import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from "../components/Helmet/Helmet";

import "../styles/auth.css";

export default function SignUpPage() {

    return (
    <Helmet title="Register">
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home" className='form1'>
                <p>
                    <label>Username</label><br/>
                    <input className="inp" type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input className="inp" type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input className="inp" type="password" name="password" requiredc />
                </p>
                <p>
                    <input className="inp" type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    </Helmet>
    )

}
