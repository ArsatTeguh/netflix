import React from "react";
import { Container } from "react-bootstrap";
import "./Header.css";
import "../Mains/Responsive/ResponHeader.css";
import logo from "../Util/logo.png";

const Header = () => {
  return (
    <>
      <Container>
        <div className="bapak-headers">
          <div className="bapak-header">
            <div className="logo">
              <img className="img-logo" src={logo} alt="" />
            </div>
            <div className="btn-masuk">
              <a href="https://arsatteguh.github.io/movies/">
                <button className="btn-logo">Movies</button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
