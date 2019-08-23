import React from "react";
import {Route} from "react-router-dom";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js"; 
import EpisodeList from "./components/EpisodeList.js";
import SearchForm from "./components/SearchForm.js";
import SearchResults from "./components/SearchResults.js";

export default function App() {
  return (
    <main>
     
      <Header />
      <TabNav /> 

      {/*<CharacterList />*/}
      {/*<LocationsList />*/}

      {/*<EpisodeList />*/}

      <Route  exact path = "/" component = {WelcomePage} /> 
  
      <Route  path = "/characters" component = {CharacterList} /> 

      <Route  path = "/locations" component = {LocationsList} />

      <Route  path = "/episodes" component = {EpisodeList} />    

      <Route  path = "/search" component = {SearchForm} />  

    </main>
  );
}
