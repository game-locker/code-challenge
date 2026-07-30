const MAX_PRICE = 99999;
//function to modify API data for MovieCard component
export function getMovieArray(data) {
  const movies = [];
  for (let i = 0; i < data.length; i++) {
    data[i].Movies.map((movie) => {
      const p = {
        providerName: data[i].Provider,
        price: movie.Price,
      };
      const m = {
        id: movie.ID,
        name: movie.Title,
        poster: movie.Poster,
        providers: [],
      };
      //if title is already in movies
      let movieIdIndex = movies.findIndex((e) => e.name === movie.Title);
      if (movieIdIndex !== -1) {
        //only add to providers if provider is not already there
        if (
          !movies[movieIdIndex].providers.some(
            (provider) => provider.providerName === data[i].Provider
          )
        ) {
          movies[movieIdIndex].providers.push(p);
        }
      } else {
        m.providers.push(p);
        movies.push(m);
      }
    });
  }
  return movies;
}
export function findCheapest(providers) {
  let lowest = MAX_PRICE;
  let cheapestProvider;
  for (let provider of providers) {
    if (provider.price < lowest) {
      lowest = provider.price;
      cheapestProvider = provider;
    }
  }
  return cheapestProvider;
}
