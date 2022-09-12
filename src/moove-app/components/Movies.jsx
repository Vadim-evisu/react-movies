import Movie from "./Movie"

export default function Movies(props) {
  const {
    movies = []
  } = props

  return <div className="movies">
    {movies.map(movie => (
      <div key={movie.imdbID} className="movie-col">
        <Movie {...movie}/>
      </div>
      ))}
  </div>
}