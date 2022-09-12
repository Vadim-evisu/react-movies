import {useState} from "react";

export default function RadioFilters(props) {
  const radioOptions = [
    {value: "", label: "All"},
    {value: "movie", label: "Movie"},
    {value: "series", label: "Series"},
  ]

  const [movieType, setType] = useState("")

  const handleInputChange = e => {
    setType(e.target.value)
    props.typeCb(e.target.value)
  }

  return (
    <div className="radio-controls">
      {radioOptions.map(item => (
        <label key={item.value}>
          <input type="radio" name="type" checked={movieType === item.value} onChange={handleInputChange} value={item.value}/>
          <span>{item.label}</span>
        </label>
      ))}
    </div>
  )
}