import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      {/* bento grid */}
      <div className="bentogrid">
        <div className="bento">
          <div className="box1">
            <a href="/" className="rizz">
              <span className="brand">Narada AI</span>
              <span className="byline">by Monster Squad</span>
            </a>
            <p>
              Downtime ends before it begins, so you know it before your users
              do.
            </p>
            <p>
              Designed & built by <b>Monster Squad</b>
            </p>
          </div>

          <div className="box2">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a
                  href="https://nikuma.notion.site/Rachna-2f1621b27a448098a3bcf5c730794fc7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
              <li>
                <a href="/#workflow">Features</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Changelog</a>
              </li>
            </ul>
          </div>

          <div className="box3">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms of Service</a>
              </li>
              <li>
                <a href="/">Refund Policy</a>
              </li>
            </ul>
          </div>

          <div className="box4">
            <h3>Socials</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/bodhniraj/rachna"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nikumadev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/nikumadev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@nikumadev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="bigtext">Narada AI</p>
    </footer>
  );
};

export default Footer;
