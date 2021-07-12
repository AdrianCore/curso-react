import React, {Component} from 'react';

class MiComponente extends Component{

    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamón'],
            calorias: 400
        };

        return(
            <React.Fragment>
                <h1>{'Nombre de la receta: ' + receta.nombre}</h1>
                <h2>{'Calorías: ' + receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            return (
                                <li key = {i}>
                                    {ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
                <hr/>
            </React.Fragment>
        );
    }
}

export default MiComponente;