import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 

import {Route} from "react-router-dom";
import WelcomePage from "./WelcomePage.js";
import CharacterList from "./CharacterList.js";
import LocationList from "./LocationsList.js";
import EpisodeList from "./EpisodeList.js";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {

    const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

    const welcomeLabel = createLabel("home", "Home Page")
    const characterLabel = createLabel("users", "Characters")
    const locationsLabel = createLabel("map", "Locations")
    const episodesLabel = createLabel("video", "Episodes")
    const searchLabel = createLabel("search", "Search")

    const panes = [
    { menuItem: <Menu.Item key='home' as={NavLink} to={`/`} content={welcomeLabel} /> },
    { menuItem: <Menu.Item key='characters' as={NavLink} to={`/characters`} content={characterLabel} /> },
    { menuItem: <Menu.Item key='locations' as={NavLink} to={`/locations`} content={locationsLabel} /> },
    { menuItem: <Menu.Item key='episodes' as={NavLink} to={`/episodes`} content={episodesLabel} /> },
    { menuItem: <Menu.Item key='episodes' as={NavLink} to={`/search`} content={searchLabel} /> }
    ]


    return (

        <Tab panes={panes} renderActiveOnly={false} />
        
        );

}



