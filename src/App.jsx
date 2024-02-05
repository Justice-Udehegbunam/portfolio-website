import "./app.scss";
import { Contact } from "./components/contact/Contact";
import { Cursor } from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { Parallax } from "./components/parallax/Parallax";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Services } from "./components/services/Services";
import { Tools } from "./components/tools/Tools";

const App = () => {
  return (
    <>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section id="Portfolio">
        <Services />
      </section>
      <section>
        <Parallax type="tools" />
      </section>
      <section>
        <Tools />
      </section>

      <section id="portfolio">
        <Parallax type="portfolio" />
      </section>
      {/*}     <Portfolio />
    <section id="Contact">
        <Contact />
      </section>
      <section>Footer</section> */}
      {/*  <Test /> */}
    </>
  );
};

export default App;
