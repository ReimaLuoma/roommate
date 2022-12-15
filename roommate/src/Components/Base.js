import Landing from "./Landing";
import Filters from "./Filters";
import Display from "./Display";

const Base = () => {
  return (
    <>
    <div className="container">
      <Landing />
      <Filters />
      <Display />
    </div>
    </>
  );
}

export default Base;
