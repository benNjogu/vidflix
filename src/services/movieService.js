import http from "./httpService";

const apiEndPoint = "http://localhost:3000/vidflix/api/movies";
export function getMovies() {
  return http.get(apiEndPoint);
}

export function deleteMovie(movieId) {
  return http.delete(apiEndPoint + "/" + movieId);
}
