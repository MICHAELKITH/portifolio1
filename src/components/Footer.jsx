import { Link } from 'react-scroll';
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img src="./images/logo.png" alt="Logoipsum" />
        </div>
        <p className="footer--content">
          {' '}
          ©
          {new Date().getFullYear()}
          {' '}
          All rights reserved
        </p>
        {/* <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy
                smooth
                offset={-70}
                duration={500}
                to="./Home"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy
                smooth
                offset={-70}
                duration={500}
                to="./Project"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy
                smooth
                offset={-70}
                duration={500}
                to="About"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="about"
                spy
                smooth
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
          </ul> */}
        {/* </div> */}
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://www.quora.com/profile/Code-Mike"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M12.555 17.025c-.624-1.227-1.354-2.465-2.781-2.465-.271 0-.546.046-.795.157l-.484-.967c.59-.509 1.544-.911 2.77-.911 1.908 0 2.889.922 3.667 2.094.459-1.001.678-2.354.678-4.03 0-4.188-1.308-6.336-4.366-6.336-3.014 0-4.318 2.148-4.318 6.336 0 4.164 1.305 6.291 4.318 6.291.478 0 .913-.051 1.311-.169zm.747 1.461a7.977 7.977 0 01-2.059.274c-4.014 0-7.941-3.202-7.941-7.858C3.303 6.203 7.229 3 11.243 3c4.081 0 7.972 3.179 7.972 7.903 0 2.628-1.226 4.763-3.007 6.143.572.861 1.157 1.436 1.988 1.436.899 0 1.261-.687 1.328-1.236h1.167c.07.73-.301 3.754-3.574 3.754-1.989 0-3.035-1.146-3.822-2.496l.007-.018z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.reddit.com/user/Chance_Tomatillo_945"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M288 568a56 56 0 10112 0 56 56 0 10-112 0zm338.7 119.7c-23.1 18.2-68.9 37.8-114.7 37.8s-91.6-19.6-114.7-37.8c-14.4-11.3-35.3-8.9-46.7 5.5s-8.9 35.3 5.5 46.7C396.3 771.6 457.5 792 512 792s115.7-20.4 155.9-52.1a33.25 33.25 0 10-41.2-52.2zM960 456c0-61.9-50.1-112-112-112-42.1 0-78.7 23.2-97.9 57.6-57.6-31.5-127.7-51.8-204.1-56.5L612.9 195l127.9 36.9c11.5 32.6 42.6 56.1 79.2 56.1 46.4 0 84-37.6 84-84s-37.6-84-84-84c-32 0-59.8 17.9-74 44.2L603.5 123a33.2 33.2 0 00-39.6 18.4l-90.8 203.9c-74.5 5.2-142.9 25.4-199.2 56.2A111.94 111.94 0 00176 344c-61.9 0-112 50.1-112 112 0 45.8 27.5 85.1 66.8 102.5-7.1 21-10.8 43-10.8 65.5 0 154.6 175.5 280 392 280s392-125.4 392-280c0-22.6-3.8-44.5-10.8-65.5C932.5 541.1 960 501.8 960 456zM820 172.5a31.5 31.5 0 110 63 31.5 31.5 0 010-63zM120 456c0-30.9 25.1-56 56-56a56 56 0 0150.6 32.1c-29.3 22.2-53.5 47.8-71.5 75.9a56.23 56.23 0 01-35.1-52zm392 381.5c-179.8 0-325.5-95.6-325.5-213.5S332.2 410.5 512 410.5 837.5 506.1 837.5 624 691.8 837.5 512 837.5zM868.8 508c-17.9-28.1-42.2-53.7-71.5-75.9 9-18.9 28.3-32.1 50.6-32.1 30.9 0 56 25.1 56 56 .1 23.5-14.5 43.7-35.1 52zM624 568a56 56 0 10112 0 56 56 0 10-112 0z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/DevMichael11"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/michaelkithinji/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 10-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">
          Think twice, code once.
        </p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy
                smooth
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy
                smooth
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy
                smooth
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
