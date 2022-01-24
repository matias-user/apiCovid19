import { insertarData } from './helpers.js';

export const crearTabla = ( result = [] ) => {
    const rowHead = document.querySelector('#trHead');
    
    insertarData(result);
    // Agregar headers
    const keys = Object.keys( result[0] );
    keys.forEach( llave => {
        const th = document.createElement('th');
        th.textContent = llave;

        rowHead.appendChild( th );
    } );
    const th = document.createElement('th');
    th.textContent = 'Detalle';

    rowHead.appendChild( th );
    // Agregar datos
    // result.forEach( (obj, i) => {
    //     document.querySelector(`#${}`)
    // } );
}