import React from 'react';
import ReactDOM from 'react-dom';

import GitHub, { sum } from './Components/GitHub'; //importa um novo Component para a classe

const gitHub = <GitHub />; //crio um elemento para o component 
//var sumResul = sum(5,6); //usando uma função exportada
//gitHub = <p>{sumResul}</p>;

ReactDOM.render(
    gitHub,
    document.getElementById('app')
);