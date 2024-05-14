import React from "react";
import "./Join.css";
import { Link } from "react-router-dom";
function Join() {
  return (
    <div>
      <div className="background">
        <img src="./background.png" className="image " />
        <div className="for_dim"></div>
        <div className="title_game">
          <h1 className="titan">Titan</h1>
          <h1 className="assault">Assault</h1>
        </div>
        <div className="border_div">
          <h1 className="sign_up">Welcome to the game </h1>
          <input type="email" placeholder=" Email Id"></input>

          <input type="password" placeholder=" Password"></input>

          <button type="submit">Log In</button>
          <h1 className="separate">--------------------------------------</h1>
          <h1>Don't have an account</h1>
          {/* <button className="login">Sign Up Now</button> */}
          <Link to="/sign_up" className="logi_n">
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Join;
