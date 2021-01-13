import react, { useState } from "react";
import Axios from "axios";
import ResultCard from "./card";
const Main = () => {
  const [query, setQuery] = useState("");
  const [receipies, setReceipies] = useState([]);
  const APP_ID = "bace8613";
  const APP_KEY = "5c16b4c9645c998fcd517cd4ef89886d";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

  const getData = async () => {
    const res = await Axios.get(url);
    setReceipies(res.data.hits);
    setQuery("");
  };
  const onsubmit = (e) => {
    e.preventDefault();
    getData();
  };
  onchange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <h1
          onClick={getData}
          className="font-italic text-success p-2 bd-highlight col-example"
        >
          Food Searching
        </h1>
      </div>
      <form
        className="d-flex align-items-center justify-content-center"
        onSubmit={onsubmit}
      >
        <input
          type="text"
          value="search"
          className="form-control  p-10 bd-highlight col-example m-2"
          placeholder="search food"
          onChange={onchange}
          value={query}
        ></input>
        <button type="submit" className="btn btn-success mr-4">
          Search
        </button>
      </form>
      <div>
        {receipies.map((recipe) => (
          <ResultCard recipe={recipe} />
        ))}
        <span></span>
      </div>
    </div>
  );
};
export default Main;
