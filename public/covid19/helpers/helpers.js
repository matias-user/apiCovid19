import { crearGrafica } from './crear-grafica.js';

export const traerInfoTotalCovid = async() => {
    const urlApi = 'http://localhost:3000/api/total/';
    const result = await axios.get( urlApi );
    transformarResult( result.data.data );
    
};
const transformarResult = ( result = [] ) => {
    const minDeath = 8_000_000;
    const arrFiltrado = result.filter( obj => obj.confirmed > minDeath )
    crearGrafica( arrFiltrado );
    crearTabla( arrFiltrado );
};
const crearTabla = ( result = [] ) => {
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
const insertarData = ( result = [] ) => {
    const tBody = document.querySelector('#tBody');

    for( let obj of result ){
        console.log(obj);
        tBody.innerHTML += ` 
        <tr>
            <th scope="row">${obj.location}</th>
            <td>${obj.confirmed}</td>
            <td>${obj.deaths}</td>
            <td>${obj.recovered}</td>
            <td>${obj.active}</td>
            <td>
                <button class="btn btn-primary" id="${obj.location}" >Ver</button> 

            </td>

      </tr>
        `
    }
    

}
