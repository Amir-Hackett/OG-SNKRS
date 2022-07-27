import React from "react";
import './SignUp.css';

function SignUp() {
  return (
    <div class="login-page">
      <div class="form">
        <form class="login-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="email" placeholder="Email Address" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;