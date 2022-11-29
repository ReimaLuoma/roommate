import Authentication from "./Components/Authentication";
import MovieCard from "./Components/MovieCard";

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

      <div className="container">
        <div className="row">
          <div className="card-columns col-6 text-center">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
  
}

export default App;