import { expect, test } from "vitest";
import { getMovieArray, findCheapest } from "./utils";
import cinemaWorldMovieObj from "./mockCinemaWorldData.json";
import filmWorldMovieObj from "./mockFilmWorldData.json";

const cinemaWorldMovieArray = [
  {
    Provider: "Cinema World",
    Movies: [
      {
        Actors: "A, B, C",
        ID: "aaa",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
        Price: 21,
        Title: "America",
        Type: "movie",
      },
      {
        Actors: "A, B, C",
        ID: "bbb",
        Poster:
          "https://resizing.flixster.com/FjQaTXCt_RDm2KGuk5edFPTXMY4=/300x300/v2/https://flxt.tmsimg.com/assets/p159762_v_v8_as.jpg",
        Price: 20,
        Title: "Bee",
        Type: "movie",
      },
      {
        Actors: "A, B, C",
        ID: "ccc",
        Poster:
          "https://media.4-paws.org/b/8/d/5/b8d5441fec6b84e9c3cba899549b84bb0f193fff/VIER%20PFOTEN_2019-07-18_013-2890x2000.jpg",
        Price: 21,
        Title: "Ducks",
        Type: "movie",
      },
    ],
  },
];
const multipleProvidersArray = [cinemaWorldMovieObj, filmWorldMovieObj];
const mockData1 = [
  {
    id: "aaa",
    name: "America",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    providers: [{ providerName: "Cinema World", price: 21 }],
  },
  {
    id: "bbb",
    name: "Bee",
    poster:
      "https://resizing.flixster.com/FjQaTXCt_RDm2KGuk5edFPTXMY4=/300x300/v2/https://flxt.tmsimg.com/assets/p159762_v_v8_as.jpg",
    providers: [{ providerName: "Cinema World", price: 20 }],
  },
  {
    id: "ccc",
    name: "Ducks",
    poster:
      "https://media.4-paws.org/b/8/d/5/b8d5441fec6b84e9c3cba899549b84bb0f193fff/VIER%20PFOTEN_2019-07-18_013-2890x2000.jpg",
    providers: [{ providerName: "Cinema World", price: 21 }],
  },
];
test("movie data should return correct for 1 provider", () => {
  expect(getMovieArray(cinemaWorldMovieArray)).toEqual(mockData1);
});
test("movie data should return correct for 2 providers", () => {
  const mockData = [
    {
      id: "aaa",
      name: "America",
      poster:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
      providers: [
        { providerName: "Cinema World", price: 21 },
        { providerName: "Film World", price: 19 },
      ],
    },
    {
      id: "bbb",
      name: "Bee",
      poster:
        "https://resizing.flixster.com/FjQaTXCt_RDm2KGuk5edFPTXMY4=/300x300/v2/https://flxt.tmsimg.com/assets/p159762_v_v8_as.jpg",
      providers: [
        { providerName: "Cinema World", price: 20 },
        { providerName: "Film World", price: 15 },
      ],
    },
    {
      id: "ccc",
      name: "Ducks",
      poster:
        "https://media.4-paws.org/b/8/d/5/b8d5441fec6b84e9c3cba899549b84bb0f193fff/VIER%20PFOTEN_2019-07-18_013-2890x2000.jpg",
      providers: [
        { providerName: "Cinema World", price: 21 },
        { providerName: "Film World", price: 15 },
      ],
    },
  ];
  const newArray = getMovieArray(multipleProvidersArray);
  expect(getMovieArray(multipleProvidersArray)).toEqual(mockData);
});
test("movie data should return correct for duplicate titles", () => {
  const duplicateMovies = [
    {
      Provider: "Cinema World",
      Movies: [
        {
          Actors: "A, B, C",
          ID: "aaa",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
          Price: 21,
          Title: "America",
          Type: "movie",
        },
        {
          Actors: "A, B, C",
          ID: "ccc",
          Poster:
            "https://media.4-paws.org/b/8/d/5/b8d5441fec6b84e9c3cba899549b84bb0f193fff/VIER%20PFOTEN_2019-07-18_013-2890x2000.jpg",
          Price: 21,
          Title: "Ducks",
          Type: "movie",
        },
        {
          Actors: "A, B, C",
          ID: "ccc",
          Poster:
            "https://media.4-paws.org/b/8/d/5/b8d5441fec6b84e9c3cba899549b84bb0f193fff/VIER%20PFOTEN_2019-07-18_013-2890x2000.jpg",
          Price: 21,
          Title: "Ducks",
          Type: "movie",
        },
      ],
    },
  ];
  const titles = getMovieArray(duplicateMovies).map((obj) => obj.name);
  const uniqueTitles = [...new Set(titles)];
  expect(titles).toHaveLength(uniqueTitles.length);
});
test("movie data should return correct for duplicate providers", () => {
  const duplicateProviders = [];
  duplicateProviders.push(cinemaWorldMovieObj);
  duplicateProviders.push(cinemaWorldMovieObj);
  const newArray = getMovieArray(duplicateProviders);
  expect(newArray).toEqual(mockData1);
});
test("should find cheapest of 1 provider", () => {
  const providers = [{ providerName: "a", price: 1 }];
  expect(findCheapest(providers).price).toEqual(1);
});
test("should find cheapest of 2 providers", () => {
  const providers = [
    { providerName: "a", price: 1 },
    { providerName: "b", price: 2 },
  ];
  expect(findCheapest(providers).price).toEqual(1);
});
test("should find cheapest of 3 providers", () => {
  const providers = [
    { providerName: "a", price: 3 },
    { providerName: "b", price: 2 },
    { providerName: "c", price: 1 },
  ];
  expect(findCheapest(providers).price).toEqual(1);
});
