import Filters from "./Components/Filters";
import Landing from "./Components/Landing";
import Display from "./Components/Display";
import Admin from "./Components/Admin";
import User from "./Components/User";

function App() {
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

export default App;
