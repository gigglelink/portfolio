import React from "react";
import Nav from "./component/Nav/Nav";
import HeroSection from "./component/HeroSection/HeroSection";
import Project from "./component/Project/Project";
import Experience from "./component/Experience/Experience";
import ContactForm from "./component/ContactForm/ContactForm";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <HeroSection />
      <Project />
      <Experience />
      <ContactForm />
    </div>
  );
}

export default App;
