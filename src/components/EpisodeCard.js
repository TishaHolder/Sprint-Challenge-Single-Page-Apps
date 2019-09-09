import React from "react";
import { Tab, Menu, Icon, Card, List, Image } from "semantic-ui-react";
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 

export default function EpisodeCard (props) {
      

        return (
            <Card>
              <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Description>
                  <List>
                    <List.Item>Air Date: {props.airdate}</List.Item>
                    <List.Item>Episode: {props.episode}</List.Item>
                  </List>
                </Card.Description>
              </Card.Content>
            </Card>


    );
}

