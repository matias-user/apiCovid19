import { crearGrafica } from './crear-grafica.js';
import { crearTabla } from './crear-table.js';

export const traerInfoTotalCovid = async() => {
    const urlApi = 'http://localhost:3000/api/total/';
    const result = await axios.get( urlApi );
    transformarResult( result.data.data );
    
};
export const traerInfoPais = async( pais = '' ) => {
    const urlApi = `http://localhost:3000/api/countries/${pais}`;
    const result = await axios.get( urlApi );
    console.log(result);
};

const transformarResult = ( result = [] ) => {
    const minDeath = 8_000_000;
    const arrFiltrado = result.filter( obj => obj.confirmed > minDeath )
    crearGrafica( arrFiltrado );
    crearTabla( arrFiltrado );
};

export const insertarData = ( result = [] ) => {
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
                <button class="btn btn-primary btns" id="${obj.location}" >Ver</button> 

            </td>
      </tr>`
    }
}
