console.log("1/ Combien y a-t-il d'éléments <p> présents dans la page HTML ?");
console.log(document.getElementsByTagName('p').length);

console.log("\n2/ Quel est le contenu texte de l'élément portant l'id coucou ?");
console.log(document.getElementById('coucou').innerHTML);

console.log("\n3/ Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ?");
console.log(document.getElementsByTagName('a')[2].href);

console.log("\n4/ Combien d'éléments portent la classe compte-moi ?");
console.log(document.getElementsByClassName('compte-moi').length);

console.log("\n5/ Combien d'éléments <li> portent la classe compte-moi");
console.log(document.querySelectorAll("li.compte-moi").length);

console.log("\n6/ Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ?");
console.log(document.querySelectorAll("ol li.compte-moi").length);

console.log("\n7/Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…\nLa page contient un seul élément <div>.\nCelui-ci contient 2 éléments 'unordered list' ou <ul>.\nDans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu.");
console.log(document.getElementsByTagName('div')[0].getElementsByTagName('ul')[1].querySelector('li').innerHTML);
