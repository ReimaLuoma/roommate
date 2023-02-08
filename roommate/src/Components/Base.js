import Landing from "./Landing";
import Filters from "./Filters";
import Display from "./Display";
import About from "./About";

const Base = () => {
  return (
    <>
    <div className="container">
      <Landing />
      <Filters />
      <Display />
      <About />
    </div>
    </>
  );
}

export default Base;
