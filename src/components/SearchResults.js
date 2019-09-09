import React from "react";
import { Tab, Menu, Icon, Card, List, Image } from "semantic-ui-react";
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 

export default function SearchResults({ name, type, dimension }) {

console.log ("search results card");

  return (    

    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>
          {type} {dimension}
        </Card.Description>
      </Card.Content>     
    </Card>

  );
}
