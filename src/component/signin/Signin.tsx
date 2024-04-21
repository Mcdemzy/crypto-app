// import React from 'react'

const Signin = () => {
  return (
    <>
      <section className="signin__container">
        {/* Add the hello message */}
        <h2>Sign into your account</h2>

        {/* Form */}
        <form action="">
          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="name@gmail.com " required />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password" placeholder="..........." required />
          </div>
          <a href="" className="signin__container-forgot">
            Forgot Password?
          </a>

          <button>Sign in</button>
          <p>
            Not a member yet? <a href="">Sign up</a>
          </p>
        </form>
      </section>
    </>
  );
};

export default Signin;
