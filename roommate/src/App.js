import Authentication from "./Components/Authentication";
import MovieCard from "./Components/MovieCard";
import FilterButton from "./Components/FilterButton";

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
          <div className="col filter-columns">
            <FilterButton filterName={"Genres"} />
            <FilterButton filterName={"Duration"} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="card-columns col text-end">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
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