import React from "react";
import { Badge, Button, Popover, PopoverHeader, PopoverBody, Table } from "reactstrap";
import { listaCarrito } from "../ListaCarrito.json";


class Carro extends React.Component{
    constructor(){
        super();
        this.state={
            popoverOpen:false,
            listaCarrito
        };

    this.toggle=this.toggle.bind(this);
}

toggle(){
    this.setState(prevState =>({
        popoverOpen: !prevState.popoverOpen
    }));
}
    render(){
        const arregloCarrito=this.state.listaCarrito.map(
            (listaCarrito, i)=>{
                return(
                    <tr>
                      <td>{( i+= 1 )}</td>
                      <td>{ listaCarrito.titulo }</td>
                      <td>{ listaCarrito.precio }</td>
                    </tr>
                            );
                          }
                        )
        const total = this.state.listaCarrito.reduce((sum, value) => (sum + parseInt(value.precio)*1000), 0);                  
        return(
            <div>
                <Button id="Popover1" color ="warning">
                <span class="material-icons">add_shopping_cart</span>
                    <Badge color="danger">{ arregloCarrito.length }</Badge>
                </Button>
                <Popover target="Popover1" placement="bottom" isOpen={ this.state.popoverOpen } toggle={ this.toggle }>
                    <PopoverHeader>Listado de compras</PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Personaje</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                               { arregloCarrito }
                            </tbody>
                            <tfoot>
                            <tr>
                                <td ><b>TOTAL A PAGAR:</b></td>
                                <td></td>
                                <td>${ total }CLP</td>
                            </tr>
                            </tfoot>
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}
export default Carro;