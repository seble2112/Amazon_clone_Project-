import React from 'react'
import Classes from './Auth.module.css'
import LayOut from '../../Componets/LayOut/LayOut'
import { Link } from 'react-router-dom'
const Auth = () => {
  return (
    <section className={Classes.login}>
      {/* logo */}
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className={Classes.login__container}>
        <h1> Sign In </h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className={Classes.login__signInButton}>Sign in</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className={Classes.login__registerButton}>
          Create Amazon ACCount
        </button>
      </div>
    </section>
  );
}

export default Auth