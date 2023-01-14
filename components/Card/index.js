import React from "react";
import { Container, Content, Header, Types } from "./styles";

import TypeLabel from "../TypeLabel";
import Frame from "../Frame";


function Card(props) {
  return (
    <Container active={props.active} onClick={props.onClick}>
      {props.sprite && (
        <Frame
          src={props.sprite}
          alt={props.name + " Sprite"}
          width={360}
          height={360}
          priority
        />
      )}
      <Content>
        <Header>
          <div>Nº&nbsp;{props.id.toString().padStart(3, "0")}</div>
          <span>{props.name}</span>
        </Header>
        <Types>
          {props.type &&
            props.type.map((type, id) => (
              <TypeLabel key={type} type={props.type[id]} />
            ))}
        </Types>
      </Content>
    </Container>
  );
}
export default Card;
