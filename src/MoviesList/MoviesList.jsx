import { useQuery } from "react-query";
import { getAllMovies } from "../api";

export default function MoviesList() {
  const { data, error, isLoading, isError } = useQuery("movies", getAllMovies);

  if (isLoading) {
    return <div>..loading</div>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {data.results.map(({ original_title, release_date }) => (
        <li>
          {original_title} - {release_date}
        </li>
      ))}
    </ul>
  );
}
