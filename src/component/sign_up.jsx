import React, { useState } from "react";
import "./sign_up.css";
function Sign_up() {
  const [first_name, setfirst_name] = useState("");
  const [lst_name, set_lst_name] = useState("");
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
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
  const handle_click = () => {
    console.log("First Name:", first_name);
    console.log("Last Name:", lst_name);
    console.log("Email:", email);
    console.log("Password:", password);
    setfirst_name("");
    set_lst_name("");
    set_email("");
    set_password("");
  };
  return (
    <div>
      <div className="background ">
        <img src="/background.png" className="img " />
      </div>
      <div className="border_div">
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

        <button type="submit" onClick={handle_click}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Sign_up;
