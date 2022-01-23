export const getAllMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
  );

  if (response.ok) {
    throw new Error("Something went wrong.");
  }

  return response.json();
};
