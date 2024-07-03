import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [franky, setFranky] = useState("images/icons/f-key.png");
  const [linkedin, setLinkedin] = useState("images/icons/linkedin.png");
  const [github, setGithub] = useState("images/icons/github.png");
  const [resume, setResume] = useState("images/icons/resume.png");
  const [aboutMe, setAboutMe] = useState("images/icons/happy.png");

  const nav = useNavigate();
  return (
    <header className="flex flex-row justify-between m-auto container max-w-screen-lg pl-5 pt-5 pr-5">
      <img
        src={franky}
        alt="Franky Lu"
        width={50}
        onClick={() => nav("/")}
        onMouseEnter={() => {
          setFranky("images/icons/f-key-blue.png");
        }}
        onMouseLeave={() => {
          setFranky("images/icons/f-key.png");
        }}
        className=" hover:cursor-pointer"
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
        <a
          href="files/Franky%20Lu%20Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        <img
          src={aboutMe}
          alt="About Me"
          width={30}
          className=" hover:cursor-pointer"
          onMouseEnter={() => {
            setAboutMe("images/icons/happy-blue.png");
          }}
          onMouseLeave={() => {
            setAboutMe("images/icons/happy.png");
          }}
          title="More About Me"
          onClick={() => nav("/hobbies")}
        />
      </nav>
    </header>
  );
}

export default Header;
