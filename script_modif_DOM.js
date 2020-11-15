function changeTitles() {
  document.querySelector('h1').innerHTML = "Ce que j'ai appris à THP";
  document.querySelector('section.jumbotron div p').innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}

changeTitles();

function changeCallToActions() {
  document.querySelector('section.jumbotron div').getElementsByTagName('p')[1].getElementsByTagName('a')[0].innerHTML = "OK je veux tester !";
  document.querySelector('section.jumbotron div').getElementsByTagName('p')[1].getElementsByTagName('a')[0].href = "http://www.thehackingproject.org";
  document.querySelector('section.jumbotron div').getElementsByTagName('p')[1].getElementsByTagName('a')[1].innerHTML = "Non merci";
  document.querySelector('section.jumbotron div').getElementsByTagName('p')[1].getElementsByTagName('a')[1].href = "https://www.pole-emploi.fr/accueil/";
}

changeCallToActions();

function changeLogoName() {
  document.querySelector('strong').innerHTML = "The THP Experience";
  document.querySelector('strong').style.fontSize = "2em";
}

changeLogoName();

function populateImages() {
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

  let cardClassElts = document.getElementsByClassName('card');
  
  for (i = 0; i < cardClassElts.length; i++) {
    cardClassElts[i].querySelector('img').setAttribute('src', imagesArray[i]);
  };
}

populateImages();


function deleteLastCards() {
  for (i = 0; i < 3; i++) {
    let firstCardClassElt = document.querySelector('.card');
    firstCardClassElt.parentNode.parentNode.lastElementChild.remove();    
  }
}

deleteLastCards();

function changeCardsText() {
  let cardClassElts = document.getElementsByClassName('card');
  let cardTextArray = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];
  for (i = 0; i < 3; i++) {
    cardClassElts[i].querySelector('p').innerHTML = cardTextArray[i];
  }
}

changeCardsText();

function changeViewButtons() {
  let cardClassElts = document.getElementsByClassName('card');
  for (i = 0; i < cardClassElts.length; i++) {
    cardClassElts[i].querySelector('.btn').classList.remove("btn-outline-secondary");
    cardClassElts[i].querySelector('.btn').classList.add("btn-success");
  }
}

changeViewButtons();

function pyramid() {
  let oldParent = document.querySelector('.card').parentNode.parentNode;
  // oldParent.insertAdjacentHTML("afterEnd", "<div class='row'></div>");
  // newDiv = oldParent.nextSibling;
  let newDiv = document.createElement('div');
  newDiv.classList.add('row');
  oldParent.parentNode.insertBefore(newDiv, oldParent.nextSibling);
  let cardToMove = oldParent.querySelectorAll("div.col-md-4")[2];
  // Only moves the childNodes !
  // while (cardToMove.childNodes.length > 0) {
  //   newDiv.appendChild(cardToMove.childNodes[0]);
  // }
  newDiv.append(cardToMove);
}

pyramid();
