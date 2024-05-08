import React, { useEffect, useState } from "react";
import "./sign_up.css";
import { auth, provider } from "./Login";
import { signInWithPopup } from "firebase/auth";
const clientId =
  "283564002176-24hc53nk8au0j0or25v4cdb1hjuag9m1.apps.googleusercontent.com";
function Sign_up() {
  const [first_name, setfirst_name] = useState("");
  const [lst_name, set_lst_name] = useState("");
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [value, set_value] = useState("");
  const handle_first_name = (e) => {
    setfirst_name(e.target.value);
  };
  const handle_lst_name = (e) => {
    set_lst_name(e.target.value);
  };
  const handle_email = (e) => {
    set_email(e.target.value);
  };
  const handle_password = (e) => {
    set_password(e.target.value);
  };

  const submit_form = () => {
    console.log("First Name:", first_name);
    console.log("Last Name:", lst_name);
    console.log("Email:", email);
    console.log("Password:", password);
    setfirst_name("");
    set_lst_name("");
    set_email("");
    set_password("");
  };
  const handle_click = () => {
    signInWithPopup(auth, provider).then((data) => {
      set_value(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    set_value(localStorage.getItem("email"));
  });
  return (
    <div>
      <h1 className="titan">Titan</h1>

      <h1 className="assault">Assault</h1>

      <div className="background ">
        <img src="/background.png" className="img " />
      </div>
      <div className="border_div">
        <h1 className="sign_up">Sign Up</h1>
        <input
          type="text"
          value={first_name}
          onChange={handle_first_name}
          placeholder=" Enter First Name"
        ></input>

        <input
          type="text"
          value={lst_name}
          onChange={handle_lst_name}
          placeholder=" Enter Last Name"
        ></input>

        <input
          type="email"
          value={email}
          onChange={handle_email}
          placeholder=" Enter Email Id"
        ></input>

        <input
          type="password"
          value={password}
          onChange={handle_password}
          placeholder="Enter Password"
        ></input>
        <div className="for_submit">
          <button type="submit" onClick={submit_form}>
            Submit
          </button>
          <p>or</p>
          <button className="login" onClick={handle_click}>
            SignIn With Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sign_up;
