import { traerInfoTotalCovid } from "../helpers/helpers.js";
import { traerInfoPais } from "../helpers/helpers.js";


document.addEventListener( 'DOMContentLoaded', async() => {
    
    await traerInfoTotalCovid();
    // traerInfoPais();
    const botones = document.querySelectorAll('.btns');
    botones.forEach( arr => arr.addEventListener('click', () =>{
        
    }  ) );
});

