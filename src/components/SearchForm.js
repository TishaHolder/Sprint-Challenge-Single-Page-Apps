import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm({ onSearch }) {
  // STRETCH TODO: Add stateful logic for query/form data

  const [query, setQuery] = useState({ name: "" });  

  const [searchResults, setSearchResults] = useState([]);
  

  const handleInputChange = (event) => {
    //setQuery({ ...query, name: event.target.value })
    event.preventDefault();
    setQuery({...query, [event.target.name]: event.target.value});     

  }

  const parameter = query.name;
  console.log(parameter);  


  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
    if (parameter !== "") {

     //request to api
     axios.get(`https://rickandmortyapi.com/api/character/?name=${parameter}`)
     
     .then( response => {

         //console.log(response.data);

         //setter function stores response in characterList
         setSearchResults(response.data.results);   
         
         console.log("search results", searchResults);

     })
    }//end if    

  }, [query]);

  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(query)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={query.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
