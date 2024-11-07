import Landing from "./landing";
import About from "./about";
import Schedule from "./schedule";
import Tracks from "./tracks";
// import Sponsors from "./sponsors";
import Team from "./team/team";
// import Committees from "./committees";
// import Judges from "./judges";
import FAQ from "./faq";
import Footer from "./footer";
import Navigation from "./navigation";
import Stars from "./stars";

const Live = () => {
  return (
    <div className="relative bg-cutie-blue-300">
      <Navigation />
      <Landing />
      <About />
      <Tracks />
      <Schedule />
      {/* <Sponsors /> */}
      <Team />
      {/* <Committees /> */}
      {/* <Judges /> */}
      <FAQ />
      <Footer />
      <Stars length={500} />
    </div>
  );
};

export default Live;
