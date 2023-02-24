import React from "react";
import Nav from "./component/Nav/Nav";
import HeroSection from "./component/HeroSection/HeroSection";
import Project from "./component/Project/Project";
import Experience from "./component/Experience/Experience";
import ContactForm from "./component/ContactForm/ContactForm";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/#/contact" element={<ContactForm />}></Route>
        <Route path="/#/" element={<HeroSection />}></Route>
        <Route path="/#/project" element={<Project />}></Route>
        <Route path="/#/experience" element={<Experience />}></Route>
      </Routes>
    </div>
  );
}

export default App;
