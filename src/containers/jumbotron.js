import React from "react";
import jumboDate from "../fixtures/jumbo.json";
import { Jumbotron } from "../components/";

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboDate.map((jumbo) => (
        <Jumbotron key={jumbo.id} direction={jumbo.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{jumbo.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{jumbo.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image
              src={jumbo.image}
              alt={jumbo.alt}
            ></Jumbotron.Image>
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
