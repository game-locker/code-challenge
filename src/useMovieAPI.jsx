import { useQuery } from "@tanstack/react-query";

function useMovieAPI(provider) {
  return useQuery({
    queryKey: ["repoData" + provider],
    queryFn: async () => {
      const response = await fetch(
        `https://challenge.lexicondigital.com.au/api/v2/${provider}/movies`,
        {
          method: "GET",
          headers: {
            "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7",
          },
        }
      );
      const jsonData = await response.json();
      return jsonData;
    },
  });
}

export default useMovieAPI;
