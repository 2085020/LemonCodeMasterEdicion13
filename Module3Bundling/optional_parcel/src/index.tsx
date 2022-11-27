import './styles.scss';

import logo from './images/caratula.jpg';
import React from 'react';
import ReactDOM from 'react-dom';
import { HolaMundoComponent } from './HolaMundoComponent';


const username = "John Doe";
const initTime:number = 1970;
const actualYear: number = (new Date()).getFullYear();
const span = document.createElement("span");
span.textContent = `Hola soy parcel, bienvenido ${username} ${actualYear - initTime}` ;
document.getElementById("rootbefore").appendChild(span);
const img = document.createElement("img");
img.src = logo;
document.getElementById('imgContainer').appendChild(img);

ReactDOM.render(
    <HolaMundoComponent />,
    document.getElementById("root")


);




