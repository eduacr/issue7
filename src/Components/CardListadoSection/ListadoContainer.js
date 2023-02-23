import React from "react";
import ListadoCard from "./ListadoCard";
import { CardContainer, ListadoContainerStyled } from "./styledListado";

export default function ListadoContainer() {
  return (
    <ListadoContainerStyled>
      <h2>Recomendaciones</h2>
      <CardContainer>
        <ListadoCard />
       <ListadoCard />
        
      </CardContainer>
    </ListadoContainerStyled>
  );
}
