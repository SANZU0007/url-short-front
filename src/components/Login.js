import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [passShow, setPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate();

  const setVal = async (e) => {
    const { name, value } = e.target;
    setInpval((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const newUser = async (e) => {
    e.preventDefault();

    const { email, password } = inpval;

    if (email === "") {
      alert("please enter your email");
    } else if (!email.includes("@")) {
      alert("enter your valid email");
    } else if (password === "") {
      alert("enter your password");
    } else if (password.length < 6) {
      alert("password must be 6 characters");
    } else {
      console.log("user login is confirmed");

      const data = await fetch("https://login-zft1.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const res = await data.json();
      console.log(res);

      if (res.status === 201) {
        localStorage.setItem("usersdatatoken", res.result.token);
        history("/dash");


        setInpval({ ...inpval, email: "", password: "" });
      }
    }
  };

  return (
    <><br></br><br></br>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
       
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={setVal}
                value={inpval.email}
                placeholder="Enter Your Email Address"
                id="email"
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  onChange={setVal}
                  name="password"
                  value={inpval.password}
                  placeholder="Enter Your password"
                  id="password"
                />
                <div
                 id="password"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "show " : "Hide"}
                </div>
              </div>
            </div>

            <button className="btn" onClick={newUser}>
              Login
            </button>
            <p>
              Don't have an Account? <NavLink to="/register">Register</NavLink>{" "}
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
