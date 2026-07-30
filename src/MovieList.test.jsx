import { render, screen } from "@testing-library/react";
import mockCinemaWorldData from "./mockCinemaWorldData.json";
import mockFilmWorldData from "./mockFilmWorldData.json";
import MovieList from "./MovieList";

describe("MovieList", () => {
  it("renders Loading state", () => {
    //check if MovieList renders loading
    const cinemaworldApiLoading = { isLoading: true };
    const filmworldApiLoading = { isLoading: true };
    const apiData = [cinemaworldApiLoading, filmworldApiLoading];
    render(<MovieList apiData={apiData} />);
    const loadingElement = screen.getByText("Loading...");
    expect(loadingElement).toBeDefined();
  });
  it("renders Error state", () => {
    //check if MovieList renders error
    const cinemaworldApi = { isLoading: false, error: true };
    const filmworldApi = { isLoading: false, error: true };
    const apiData = [cinemaworldApi, filmworldApi];
    render(<MovieList apiData={apiData} />);
    const errorElement = screen.getByText(
      "Sorry, there was an error loading the data, please try again D:"
    );
    expect(errorElement).toBeDefined();
  });
  it("renders MovieList with MovieCards", () => {
    //check if MovieList renders MovieCards with data
    const cinemaworldApi = {
      isLoading: false,
      error: false,
      isFetching: false,
      data: mockCinemaWorldData,
    };
    const filmworldApi = {
      isLoading: false,
      error: false,
      isFetching: false,
      data: mockFilmWorldData,
    };
    const apiData = [cinemaworldApi, filmworldApi];
    render(<MovieList apiData={apiData} />);
    const americaMovieCardElement = screen.getByTestId("movie-card-America");
    expect(americaMovieCardElement).toBeDefined();
    const beeMovieCardElement = screen.getByTestId("movie-card-Bee");
    expect(beeMovieCardElement).toBeDefined();
    const carsMovieCardElement = screen.getByTestId("movie-card-Ducks");
    expect(carsMovieCardElement).toBeDefined();
  });

  it("renders MovieList with MovieCards", () => {
    //check if MovieList fetching
    const cinemaworldApi = {
      isLoading: false,
      error: false,
      isFetching: true,
      data: mockCinemaWorldData,
    };
    const filmworldApi = {
      isLoading: false,
      error: false,
      isFetching: true,
      data: mockFilmWorldData,
    };
    const apiData = [cinemaworldApi, filmworldApi];
    render(<MovieList apiData={apiData} />);
    const fetchElement = screen.getByText("Updating...");
    expect(fetchElement).toBeDefined();
  });

});
