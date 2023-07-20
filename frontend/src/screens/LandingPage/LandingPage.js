import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./LandingStyles.css";

function LandingPage({ history }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  return (
    <div className="main">
      <div className="intro-text">
        <div>
          <p
            style={{
              padding: "0",
              margin: "0",
              color: "#f3f3f3",
              fontSize: "20px",
              letterSpacing: "12px",
            }}
          >
            WELCOME TO
          </p>
          <h1 className="title">
            <span
              style={{
                color: "#1db954",
                fontSize: "70px",
                fontWeight: "semibold",
              }}
            >
              ZETA
            </span>{" "}
            Note
          </h1>
          <p
            style={{ color: "#1db954", fontSize: "20px", padding: "10px 50px" }}
          >
            Empower Your Ideas: Seamlessly Capture, Organize, and Inspire with
            our Intuitive Note-Taking App!
          </p>
        </div>
        <div className="buttonContainer">
          <Link to="/login">
            <button className="landingbutton landingbutton1">LOGIN</button>
          </Link>
          <Link to="/register">
            <button className="landingbutton landingbutton2">SIGNUP</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
