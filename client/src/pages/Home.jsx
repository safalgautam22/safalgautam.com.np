import { Nav } from "../components/Navbar";
import { Introduction } from "../components/Intro";
import { Project } from "../components/Project";
import { Skills } from "../components/Skills";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export const Home = () => {
  return (
    <>
      <nav><Nav /></nav>
      <section id="intro"><Introduction /></section>
      <section id="projects"><Project /></section>
      <section id="skills"><Skills /></section>
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
      <footer className="text-center"><span className="align-middle text-2xl">&#169;</span> 2026 Safal Gautam. All rights reserved.</footer>
    </>
  );
}
