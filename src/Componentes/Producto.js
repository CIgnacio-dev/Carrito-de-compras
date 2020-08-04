import React from "react";
import { CardTitle, CardBody, CardImg, Col, Card, CardSubtitle, CardText } from "reactstrap";
import "./Producto.css";
import FichaProducto from "./FichaProducto"

class Producto extends React.Component {
    render(){
    return(
        <Col sm="4">
            <Card>
                <Card className="Card" body outline color="primary"></Card>
                    <CardImg src={ this.props.imagen }/>
                    <CardBody>
                        <CardTitle>{ this.props.titulo }</CardTitle>
                        <CardSubtitle>{ this.props.subtitulo } </CardSubtitle>
                        <CardSubtitle>{ this.props.precio } </CardSubtitle>
                        <CardText>
                            { this.props.texto }
                            
                        </CardText>
                        <FichaProducto props={ this.props }></FichaProducto>
                    </CardBody>
                </Card>
            </Col>
    );
}
}

export default Producto;