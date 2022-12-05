import Authentication from "./Components/Authentication";
import MovieCard from "./Components/MovieCard";
import MultipleSelectPlaceholder from "./Components/MultipleSelectPlaceholder";
import Search from "./Components/Search";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center logo">ROOMMATE-V</div>
          Authentication
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6 filter-columns">
            <MultipleSelectPlaceholder placeholder={"genres"} />
            <MultipleSelectPlaceholder placeholder={"duration"} />
          </div>
          <div className="col-6">
            <Search />
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
