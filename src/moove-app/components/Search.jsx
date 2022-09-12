import { useState } from "react";

export default function Search(props) {
  const [searchState, setSearch] = useState('');

  const onSubmitSearch = (e) => {
    e.preventDefault();
    props.searchCb(searchState)
    // console.log(searchState)
  }

  return (
    <form className="search-form" onSubmit={onSubmitSearch}>
      <input value={searchState} onChange={(e) => setSearch(e.target.value)} type="text" className="search-bar" />
      <button type="submit">Search</button>
    </form>
  )
}