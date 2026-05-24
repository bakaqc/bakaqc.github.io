import React, { Suspense } from "react";
import "./App.scss";
import Loading from "./components/common/Loading";

const Header = React.lazy(() => import("./components/header/Header"));
const Home = React.lazy(() => import("./components/home/Home"));
const About = React.lazy(() => import("./components/about/About"));
const Experience = React.lazy(
  () => import("./components/experience/Experience")
);
const Skills = React.lazy(() => import("./components/skills/Skills"));
const Qualification = React.lazy(
  () => import("./components/qualification/Qualification")
);
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Footer = React.lazy(() => import("./components/footer/Footer"));
const ScrollUp = React.lazy(() => import("./components/scrollup/ScrollUp"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Qualification />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </Suspense>
  );
};

export default App;
