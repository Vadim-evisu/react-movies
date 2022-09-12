import {useState, useEffect, useRef} from "react"

import Movies from "./../components/Movies";
import Search from "./../components/Search";
import RadioFilters from "./../components/RadioFilters";

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [filterState, setFilters] = useState({
    s: "matrix",
    type: ""
  });

  const isMountedInitialRender = useRef(false);

  const setData = async () => {
    setLoading(true);
    const data = await fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${filterState.s}&type=${filterState.type}`)
    const movies = await data.json();
    setMovies(movies?.['Search'] ?? []);
    setLoading(false);
  }

  const setQuerySearch = (querySearch) => {
    handleFilter({s: querySearch});
  }

  const setType = (e) => {
    handleFilter({type: e});
  }

  const handleFilter = async (queryData) => {
    isMountedInitialRender.current = false;
    setFilters(() => ({...filterState, ...queryData}))
  }

  // 1. Component Mounts
  // 2. Component UnMounts
  // 2. Component Mounts

  useEffect(() => {
    if (!isMountedInitialRender.current) {
      isMountedInitialRender.current = true;
      setData();
    }
  }, [filterState]);


  return (
    <main className="container">
      <div className="main">
        <Search searchCb={setQuerySearch}/>
        <RadioFilters typeCb={setType}/>
        {
          isLoading ? <h5>Loading...</h5>  : (<Movies movies={movies}/>)
        }
        {!movies.length && !isLoading &&
          <h2>
            Not found
          </h2>
      }
      </div>
    </main>
  )
}