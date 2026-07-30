import "./App.css";
import useMovieApi from "./useMovieAPI";
import MovieList from "./MovieList";

function App() {
  const cinemaworldApi = useMovieApi("cinemaworld");
  const filmworldApi = useMovieApi("filmworld");
  const apiData = [cinemaworldApi, filmworldApi];
  return (
    <div className="App">
      <div>
        <h1 className="title">Prince's Theatre</h1>
        <p className="subtitle">Classic Movies At Home</p>
        <p>
          Doggo ipsum borkf heckin good boys waggy wags he made many woofs
          pupper ruff, most angery pupper I have ever seen thicc waggy wags
          maximum borkdrive. Much ruin diet yapper I am bekom fat waggy wags ur
          givin me a spook, boof pats. You are doing me the shock waggy wags sub
          woofer wow very biscit long woofer, bork pupperino pats. Long woofer
          long doggo wow such tempt shoob blop, ruff smol super chub borking
          doggo, you are doing me the shock floofs you are doing me a frighten.
        </p>
      </div>
      <MovieList apiData={apiData}></MovieList>
    </div>
  );
}

export default App;
