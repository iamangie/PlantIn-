import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer container">
      <ul className="footer__nav">
        <li>
          <Link to="/" className="text-secondary">
            Terms of Service{" "}
          </Link>
        </li>
        <li>
          <Link to="/" className="text-secondary">
            Privacy Policy{" "}
          </Link>
        </li>
        <li>
          <Link to="/" className="text-secondary">
            Subscription Policy{" "}
          </Link>
        </li>
      </ul>
      <div className="footer__copyright">
        <span className="text-secondary"> ©Copyright</span>
        <span className="text-secondary">© 2020 PlantIn. </span>
        <span className="text-secondary">All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
