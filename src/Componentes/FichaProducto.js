import React from "react";
import { ModalHeader, Modal, Button, Container, ModalBody, ModalFooter, CardImg } from "reactstrap";
import { listaCarrito } from "../ListaCarrito.json";

class FichaProducto extends React.Component{
    constructor(props){
        super();
        this.state={
            modal:false,
            listaCarrito
        };

        this.toggle=this.toggle.bind(this)
        this.agregarCarrito= this.agregarCarrito.bind(this);
    }

    toggle(){
        this.setState(prevState =>({
            modal: !prevState.modal
        }))
    }
    agregarCarrito(){
        listaCarrito.push({
            "titulo": this.props.props.titulo,
            "precio": this.props.props.precio
        });
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }
    render(){
        return(
            <Container>
            <Button onClick={ this.toggle }>Ver ficha </Button>
            <Modal isOpen={ this.state.modal }>
                <ModalHeader>{ this.props.props.titulo }</ModalHeader>
                <ModalBody>
                    <CardImg src={ this.props.props.imagen }/>
                    <p>Personaje: </p>
                    { this.props.props.pecado }
                    <p> Este personaje tiene un nivel de poder de <b>{ this.props.props.subtitulo }</b></p>
                    <p>Hay <b>{ this.props.props.stock }</b> unidades de este personaje disponibles.</p>
                    <p>El precio de { this.props.props.titulo} es de <b>{ this.props.props.precio }</b></p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={ this.agregarCarrito }>Agregar al carrito</Button> {/* Con esto se podra volver a la pagina principal sin recargar */}
                    <Button color="secondary" onClick={ this.toggle }>Volver atrás</Button>
                </ModalFooter>
            </Modal>
            </Container>
        );
}
}

export default FichaProducto;