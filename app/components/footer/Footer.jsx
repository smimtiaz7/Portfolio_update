import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

import "./footer.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="body_footer">
      <footer>
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>

        <ul className="footer__social-icon">
          <li>
            <Link href="https://www.linkedin.com/in/smimtiazrubayet/">
              <BsLinkedin />
            </Link>
          </li>

          <li>
            <Link href="https://github.com/Imtiaz4530">
              <BsGithub />{" "}
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/imtiaz.rubayet.7">
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/imtiaz__lx">
              <BsInstagram />
            </Link>
          </li>
        </ul>

        <ul className="footer__menu-nav">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#About">About</Link>
          </li>
          <li>
            <Link href="#Portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="#Skills">Skills</Link>
          </li>
          <li>
            <Link href="#Experience">Experience</Link>
          </li>
          <li>
            <Link href="#Certifications">Certification</Link>
          </li>
          <li>
            <Link href="#Contact">Contact</Link>
          </li>
        </ul>

        <p>
          © Imtiaz 2024 || All rights reserved. No part of this website may be
          reproduced without permission.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
