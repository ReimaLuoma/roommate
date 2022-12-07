import Filters from "./Components/Filters";
import Landing from "./Components/Landing";
import Display from "./Components/Display";
import Admin from "./Components/Admin";

function App() {
  return (
    <>
    <div className="container">
      <Admin />

      <Filters />

      <Display />
    </div>
    </>
  );
}

export default App;
