import React from "react";
import { Tab, Menu, Icon, Card, List, Image } from "semantic-ui-react";
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 

export default function CharacterCard(props) {
  //return <span>todo: character</span>;

  return (
    <Card>
      <Image src={props.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>
          {props.species} {props.status}
        </Card.Description>
        <List>
          <List.Item>Location: {props.location}</List.Item>
          <List.Item>Origin: {props.origin}</List.Item>
        </List>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          Episodes
        </a>
      </Card.Content>
    </Card>
  );
}
