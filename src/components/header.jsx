import React, { useState } from "react";

function Header() {
  const [franky, setFranky] = useState("images/icons/f-key.png");
  const [linkedin, setLinkedin] = useState("images/icons/linkedin.png");
  const [github, setGithub] = useState("images/icons/github.png");
  const [resume, setResume] = useState("images/icons/resume.png");
  const [aboutMe, setAboutMe] = useState("images/icons/info.png");

  return (
    <header className="flex flex-row justify-between m-auto container max-w-screen-lg pl-5 pt-5 pr-5">
      <img
        src={franky}
        alt="Franky Lu"
        width={50}
        onMouseEnter={() => {
          setFranky("images/icons/f-key-blue.png");
        }}
        onMouseLeave={() => {
          setFranky("images/icons/f-key.png");
        }}
      />
      <nav className="flex justify-between items-center gap-4 font-semibold">
        <a
          href="https://www.linkedin.com/in/franky-lu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            title="LinkedIn"
            src={linkedin}
            alt="LinkedIn"
            width={30}
            onMouseEnter={() => {
              setLinkedin("images/icons/linkedin-blue.png");
            }}
            onMouseLeave={() => {
              setLinkedin("images/icons/linkedin.png");
            }}
          />
        </a>
        <a
          href="https://github.com/frankylu3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            title="GitHub"
            src={github}
            alt="GitHub"
            width={30}
            onMouseEnter={() => {
              setGithub("images/icons/github-blue.png");
            }}
            onMouseLeave={() => {
              setGithub("images/icons/github.png");
            }}
          />
        </a>
        <a href="files/Franky Lu Resume.pdf" target="_blank">
          <img
            title="Resume"
            src={resume}
            alt="Resume"
            width={30}
            onMouseEnter={() => {
              setResume("images/icons/resume-blue.png");
            }}
            onMouseLeave={() => {
              setResume("images/icons/resume.png");
            }}
          />
        </a>
        <a href="/">
          <img
            src={aboutMe}
            alt="About Me"
            width={30}
            onMouseEnter={() => {
              setAboutMe("images/icons/info-blue.png");
            }}
            onMouseLeave={() => {
              setAboutMe("images/icons/info.png");
            }}
            title="More About Me"
          />
        </a>
      </nav>
    </header>
  );
}

export default Header;
