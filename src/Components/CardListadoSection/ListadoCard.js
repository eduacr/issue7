import React from 'react'
import { ListadoCardStyled } from './styledListado'
//import imagen from "./img-hotel.png";
import locations from "./locations"

export default function ListadoCard() {
  return (
    <ListadoCardStyled>
    <div className="card-main">
            {locations.map((item) => (
              <div className="card" key={item.id}>
                    <div className='img-container-listado'><img className='img1' src={item.img} alt={item.title}/></div>
                        <div>
                            <div className='top'><h5>{item.category}</h5></div>
                            <div className='card-h5-container'><h5>{item.title}</h5></div>
                            {/* <h5>{item.location}</h5> */}
                            <div className='card-text'><p>{item.description}</p></div>
                            <button className="card-button">Ver más</button>
                        </div>
                </div>
            ))}
    </div>
  </ListadoCardStyled> )}

