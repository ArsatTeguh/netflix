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
              <button className="btn-logo">Loker</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
