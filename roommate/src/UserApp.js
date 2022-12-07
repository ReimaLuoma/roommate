import Filters from "./Components/Filters";
import Display from "./Components/Display";
import User from './Components/User';

function App() {
  return (
    <>
    <div className="container">
      <User />

      <Filters />

      <Display />
    </div>
    </>
  );
}

export default App;
