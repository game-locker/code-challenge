import { useQuery } from "@tanstack/react-query";
import mockCinemaWorldData from "./mockCinemaWorldData.json";
import mockFilmWorldData from "./mockFilmWorldData.json";

// The live challenge API is no longer available, so we serve the bundled
// mock JSON files instead. Keyed by the provider slug used across the app.
const mockData = {
  cinemaworld: mockCinemaWorldData,
  filmworld: mockFilmWorldData,
};

function useMovieAPI(provider) {
  return useQuery({
    queryKey: ["repoData" + provider],
    queryFn: async () => {
      const data = mockData[provider];
      if (!data) {
        throw new Error(`No mock data for provider: ${provider}`);
      }
      return data;
    },
  });
}

export default useMovieAPI;