import Filters from "./Components/Filters";
import Landing from "./Components/Landing";
import Display from "./Components/Display";

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
