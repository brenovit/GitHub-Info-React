import React from 'react';
import ReactDOM from 'react-dom';

import GitHub from './components/GitHub'; //importa um novo Component para a classe

const gitHub = <GitHub />; //crio um elemento para o component 

ReactDOM.render(gitHub,document.getElementById('app'));