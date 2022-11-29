import Authentication from "./Components/Authentication";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">

          <div className="col-4 align-items-left logo">
            ROOMMATE
          </div>

          <Authentication />

        </div>
      </div>
    </>
  );
  
}

export default App;