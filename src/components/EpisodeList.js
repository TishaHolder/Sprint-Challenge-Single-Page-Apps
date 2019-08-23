import React, { useEffect, useState } from "react";
import axios from "axios";

import EpisodeCard from "./EpisodeCard.js";

export default function EpisodeList() {

  
  const [episodeList, setEpisodeList] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {    
    
     //request to api
     axios.get("https://rickandmortyapi.com/api/episode/")
     .then( response => {

         console.log(response.data.results);

         //setter function stores response in episodeList
         setEpisodeList(response.data.results);

     })

     .catch(error => {
         setError(error.response.message);
     
     })

  }, [episodeList]);

 

  return (
    <section className="character-list grid-view">
     
      {episodeList.map(eachEpisode => (       
      
        <EpisodeCard key = {eachEpisode.id} name = {eachEpisode.name}  airdate = {eachEpisode.air_date} 
                       episode = {eachEpisode.episode} />))}

    </section>
  );

}//end function EpisodeList

