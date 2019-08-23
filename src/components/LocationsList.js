import React, { useEffect, useState } from "react";
import axios from "axios";

import LocationCard from "./LocationCard.js";

export default function LocationsList() {

    const [locationList, setLocationList] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
                
         //request to api
         axios.get("https://rickandmortyapi.com/api/location/")
         .then( response => {
    
             console.log(response.data.results);
    
             //setter function stores response in locationList
             setLocationList(response.data.results);
    
         })
    
         .catch(error => {
             setError(error.response.message);
         
         })
    
      }, []);

      return (
        <section className="list grid-view">
          
    
          {locationList.map(location => (
            /*img = character.img */
          
            <LocationCard key = {location.id} name = {location.name}  dimension = {location.dimension} 
                           residents = {location.residents.length} />))}
    
        </section>
      );



}
