import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer text-gray-100 bg-gray-900 font-semibold flex flex-col sm:flex-row  sm:justify-around sm:items-center">
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: "12em", height: "8em" }}
          />
        </div>
        <section className="menu">
          <ul className="flex flex-col justify-center items-center">
            <li>
              <Link to="/" className="rounded hover:bg-gray-700 px-2 py-1">
                Home
              </Link>
            </li>
            <li>
              <Link className="rounded hover:bg-gray-700 px-2 py-1" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="rounded hover:bg-gray-700 px-2 py-1" to="/blog">
                Latest Stories
              </Link>
            </li>
            <li>
              <Link
                className="rounded hover:bg-gray-700 px-2 py-1"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            {/* <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li> */}
          </ul>
        </section>
        <div className="flex justify-around py-10">
          <a
            title="facebook"
            className="bg-gray-100 p-3 rounded-full"
            href="https://facebook.com"
          >
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a
            title="twitter"
            className="bg-gray-100 p-3 rounded-full sm:mx-2"
            href="https://twitter.com"
          >
            <img
              className="fas fa-lg"
              src={twitter}
              alt="Twitter"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a
            title="instagram"
            className="bg-gray-100 p-3 rounded-full"
            href="https://instagram.com"
          >
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
        </div>
      </footer>
    );
  }
};

export default Footer;
