/* eslint-disable max-len */
import React from "react";
import "./Style.css";

import Navbar from "../components/Navbar";
import Works from "../components/works";
import Footer from "../components/Footer";
import Skills from "../../skills";

const Home = () => {
  const errDisplay = document.querySelector(".message");
  const form = document.querySelector("#myform");
  const html = document.querySelector("html");

  const generateLinks = () => (
    <ul className="socials">
      <li className="icons">
        <a
          href="https://twitter.com/DevMichael11"
          target="_blank"
          rel="noopener noreferrer"
          data-item="true"
          className="item-btn"
        >
          <img src="./images/Twitter.png" alt="Twitter" />
        </a>
      </li>
      <li className="icons">
        <a
          href="https://github.com/MICHAELKITH"
          target="_blank"
          rel="noopener noreferrer"
          data-item="true"
          className="item-btn"
        >
          <img src="../images/GitHub.png" alt="GitHub" />
        </a>
      </li>
      <li className="icons">
        <a
          href="https://www.linkedin.com/in/michaelkithinji/"
          target="_blank"
          rel="noopener noreferrer"
          data-item="true"
          className="item-btn"
        >
          <img src="../images/LinkedIn.png" alt="LinkedIn" />
        </a>
      </li>
    </ul>
  );

  html.onclick = () => {
    if (errDisplay) {
      errDisplay.classList.remove("active");
    }
  };

  const handleSubmit = () => {
    form.submit();
  };

  return (
    <div className="wrapper">
      <header>
        <Navbar />
      </header>
      <section className="headline">
        <div className="left-head">
          <h2>Hello!</h2>
          <h4>
            I'm experienced software engineer with 4+ years in diverse environments:
            startups, enterprises, and agencies. Proficient in remote and
            in-office settings, prioritizing project ownership and speedy
            delivery. Skilled in web, mobile, and API development.
          </h4>
          <p className="body-text">
            Strong Skills:
            <strong className="SKILLS">
              JavaScript, React.js, Next14, Node.js, Flutter, React Native, Machine
              Learning, PostgreSQL and postman.
            </strong>
          </p>
          <a className="contact-btn" href="#contact">
            Contact Me
          </a>
          <p href="/" className="connect">
            Let&apos;s connect
          </p>
          {generateLinks()}
        </div>
        <div className="right-head">
          <div className="thumbnail">
            <img src="./images/mike1.png" alt="myPicture" id="head-img" />
          </div>
        </div>
      </section>
      {/* <!-- Works Section --> */}
      <Works />
      {/* <!-- about myself --> */}
      <section className="about" id="about-myself">
        <div className="personal-info">
          <h1>
            About <br />
            Myself
          </h1>
          <p className="body-text">
            I am a certified full-stack developer, having successfully completed
            the program at Microverse. In addition to my development skills, I
            have practical experience in UX (User Experience) and Customer
            Success. I have a natural aptitude for problem-solving and excel at
            debugging. I'm highly motivated to acquire new skills and keep
            myself updated with emerging technologies in the field.
          </p>
          <a href="/" className="connect">
            Let&apos;s connect
          </a>
          {generateLinks()}
          <a
            className="resume-button"
            href="./docs/Michael_Kithinji_Resume.pdf"
            download="Michael Kithinji Resume"
          >
            Download CV
            <svg fill="black" viewBox="0 0 16 16" height="1em" width="1em">
              <path d="M4.406 1.342A5.53 5.53 0 018 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 010-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 00-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 010 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
              <path d="M7.646 15.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 14.293V5.5a.5.5 0 00-1 0v8.793l-2.146-2.147a.5.5 0 00-.708.708l3 3z" />
            </svg>
          </a>
        </div>
        <div className="skills">
          <h2>Skills & Tools</h2>
          <ul>
            {Skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>
      {/* <!-- contact section --> */}
      <footer className="contact-me" id="contact">
        <div className="content">
          <h1>Get in Touch</h1>
          <p className="contact-text">
            If you have an application you are interested in developing, a
            feature that you need built or a project that needs coding. I’d love
            to help with it
          </p>
          <form
            action="https://formspree.io/f/mvoyeelg"
            id="myform"
            className="my-form"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="inputs">
              <input
                name="user_name"
                type="text"
                placeholder="Name"
                maxLength="30"
                required
              />
              <input
                id="email"
                name="user_email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Write your message here"
              maxLength="500"
              required
            />
            <button type="submit" className="form-btn">
              Send
            </button>
          </form>
        </div>
      </footer>
      <Footer />
    </div>
  );
};

export default Home;
