import MovieCard from "./MovieCard";
import "./MovieList.css";
import ErrorCard from "./ErrorCard";
import { getMovieArray } from "./utils";
import mockCinemaWorldData from "./mockCinemaWorldData";
import mockFilmWorldData from "./mockFilmWorldData";

function MovieList({ apiData }) {
  const cinemaworldApi = apiData[0];
  const filmworldApi = apiData[1];
  if (cinemaworldApi.isLoading || filmworldApi.isLoading) return "Loading...";
  if (cinemaworldApi.error || filmworldApi.error) return <ErrorCard />;
  const apiArray = [];
  apiArray.push(cinemaworldApi.data);
  apiArray.push(filmworldApi.data);
  const movies = getMovieArray(apiArray);
  // const testArray = [];
  // testArray.push(mockCinemaWorldData);
  // testArray.push(mockFilmWorldData);
  // const movies = getMovieArray(testArray);
  return (
    <div className="movie-list">
      {movies?.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            providers={movie.providers}
            title={movie.name}
            poster={movie.poster}
          ></MovieCard>
        );
      })}
      <div>
        {cinemaworldApi.isFetching || filmworldApi.isFetching
          ? "Updating..."
          : ""}
      </div>
    </div>
  );
}
export default MovieList;
