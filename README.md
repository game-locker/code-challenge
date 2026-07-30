# game-locker-challenge

## About The website

Website comparing 2 movie providers to find the cheapest price!

### Built With

- React.js
- Vite

## Getting Started

- npm
  ```sh
  npm install npm@latest -g
  ```
- To run:

  ```sh
  npm run dev
  ```

- To test (using vitest):

  ```sh
  npm run test
  ```

## Structure

This website is built using vite and react.js, vite was chosen to make the development process much faster.

The structure itself is quite simple, with App.jsx being the main page. App.jsx renders a list of MovieCard.jsx. MovieCard.jsx displays all the relevant information needed for our customer to see which movie provider streams at a cheaper price. All the API logic is handled in useMovieAPI.jsx, and all the other logic needed for price comparison and rendering is handled in utils.js.

## Trade-offs and assumptions

- The maximum price for a movie is assumed to be at $99999
- The movie names of the 2 different providers are assumed to always be the same
