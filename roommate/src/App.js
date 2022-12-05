import Authentication from "./Components/Authentication";
import MovieCard from "./Components/MovieCard";
import MultipleSelectPlaceholder from "./Components/MultipleSelectPlaceholder";
import Search from "./Components/Search";
import LoginRegister from "./Components/LoginRegister";

function App() {
  return (
    <>
      <div className="container">
        <div className="row mb-5">
          
          <div className="col-6 logo pt-3">ROOMMATE</div>

          <div className="col-6 align-self-center d-flex justify-content-end">
            <LoginRegister />
          </div>

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
