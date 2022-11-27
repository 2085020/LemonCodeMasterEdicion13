import "./mystyles.scss";
import logo from './images/caratula.jpg';

const userName = "Mundo";

const hello = `Hola ${userName}`;

const holaMundo = document.createElement("span");
holaMundo.setAttribute("class", "title-layer");
holaMundo.textContent = hello;

const title = document.getElementById("title");
title.appendChild(holaMundo);



const img = document.createElement("img");
img.src = logo;
document.getElementById("image")?.appendChild(img);

const a:number = 5;