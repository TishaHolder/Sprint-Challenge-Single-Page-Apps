import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard.js";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
     //request to api
     axios.get("https://rickandmortyapi.com/api/character/")
     .then( response => {

         console.log(response.data.results);

         //setter function stores response in characterList
         setCharacterList(response.data.results);

     })

     .catch(error => {
         setError(error.response.message);
     
     })
  }, []);

  return (
    
      <section className="character-list grid-view">
     

      {characterList.map(character => (
       
      
      <CharacterCard key = {character.id} image = {character.image} name = {character.name}  species = {character.species} 
                     status = {character.status} gender = {character.gender} location = {character.location.name} 
                     origin = {character.origin.name} />))}

    
    </section>
  );
}
