import aboutPic from "../assets/pic1.png";
import fb from "../assets/fb.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import x from "../assets/x.svg";
import discord from "../assets/discord.svg";

import { FaTwitter } from "react-icons/fa";

export const About = () => {
  return (
    <section className="my-16 flex md:justify-between md:flex-row flex-col">
      <div className="md:w-150 flex flex-col justify-center md:text-left text-center">
        <h3 className="text-3xl font-bold mb-6">About Myself !</h3>
        <p>
          I’m Safal Gautam, a computer engineering student and full-stack
          enthusiast. My work ranges from C/C++ systems programming to Python
          automation and React-based web applications. I focus on building tools
          and projects that solve real problems efficiently. When I’m not
          coding, I document my learning journey and experiment with new
          technologies to stay ahead in modern development.
        </p>
        <div className="flex flex-row md:justify-start justify-around">
          <a href="https://www.facebook.com/gtm.safal/" target="_blank">
            <img src={fb} alt="Facebook" className="icons" />
          </a>

          <a href="https://www.instagram.com/__safal622/" target="_blank">
            <img src={instagram} alt="Instagram" className="icons" />
          </a>

          <a href="https://www.linkedin.com/in/safalgautam22/" target="_blank">
            <img src={linkedin} alt="linkedin" className="icons" />
          </a>

          <a href="https://x.com/safalgautam22/" target="_blank">
            <img src={x} alt="Twitter" className="icons " />
          </a>

          <a href="https://github.com/safalgautam22/" target="_blank">
            <img src={github} alt="Github" className="icons" />
          </a>

          <a
            href="https://discord.com/users/826641958138019841"
            target="_blank"
          >
            <img src={discord} alt="Discord" className="icons" />
          </a>
        </div>
      </div>
      <div></div>
      <img
        src={aboutPic}
        alt="About Image"
        className="object-contain md:w-1/4 hover:scale-110 w-1/2 m-auto md:m-0 rounded-full"
      />
    </section>
  );
};
