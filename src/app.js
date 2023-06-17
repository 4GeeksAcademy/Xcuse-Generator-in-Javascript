/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//para que se ejecute el código cuando se recargue la página
window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
};
//arrays
let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["katze", "hund", "kuh", "biene", "ratte"];
  let actions = ["kill my", "destroyed my", "pee my", "stole my"];
  let object = ["hair", "eyes", "fingers", "nose"];
  let location = [
    "in my housetree",
    "from my flower",
    "from doomsday",
    "in the sea"
  ];
  //randomize
  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionsIndex = Math.floor(Math.random() * actions.length);
  let objectIndex = Math.floor(Math.random() * object.length);
  let locationIndex = Math.floor(Math.random() * location.length);
  //concatenate
  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    actions[actionsIndex] +
    " " +
    object[objectIndex] +
    " " +
    location[locationIndex]
  );
};
