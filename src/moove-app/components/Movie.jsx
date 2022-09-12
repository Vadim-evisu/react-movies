export default function Movie(props ) {
  const {
    "Title": title,
    "Year": year,
    "imdbID": id,
    "Type": type,
    "Poster": poster
  } = props

  return (
    <div className="card-movie">
      <div className="card-movie__preview">
        <img src={poster} alt="" className="card-movie__img" />
      </div>
      <div className="card-movie__content">
        <p>{title}</p>
      </div>
    </div>
  )
}