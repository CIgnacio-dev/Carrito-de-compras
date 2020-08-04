import React from "react";
import Producto from "./Componentes/Producto";
import "./App.css";
import { Container, Row } from "reactstrap";
import Navegacion from "./Componentes/Navegacion";
import { listaProductos } from "./Componentes/ListaProducto.json";


class  App extends React.Component{
  constructor(){
    super();

    this.state={
      listaProductos
    };
  }
  render(){
    const arregloComponentes= this.state.listaProductos.map(
    (listaProductos, i) =>{
      return(
        <Producto
        key={i}
        titulo={ listaProductos.titulo }
        imagen={ listaProductos.imagen }
        subtitulo={ listaProductos.subtitulo }
        texto={ listaProductos.texto }
        pecado={ listaProductos.pecado }
        stock={ listaProductos.stock }
        precio={ listaProductos.precio}
        />
      )
    }
    );

      return(
        <Container>
          <Navegacion titulo="Personajes 7DS con React"/>
          <Row>
          { arregloComponentes }
          </Row>
        </Container>  
      
  );
}
}
    
export default App;
