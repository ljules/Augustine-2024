---
layout: docs
title: Guide articles.md
---

# Création d'une charte graphique
Pour créer une charte graphique il faut d'abord créer un nouveau fichier CSS dans l'onglet "materialistic-pelican/static/css".

Une fois cela fait, on peut récupérer le code déjà généré par le thème pour le copier dans ce nouveau fichier puis modifier les couleurs.

Les emplacements où on peut modifier les couleurs sont dans le fichier charte-1.css à ces lignes précises:
<img src="img/modif-fond.png">
<img src="img/modif-footer.png">

Une fois celà fait il ne reste plus qu'à entrer le nom du fichier à cet endroit dans base.html dans le dossier materialistic-pelican/static/templates

<img src="img/changement-charte.png">

Cependant une fois cela fait le header et les articles ne changeront pas de couleur. 

Malheureusement le thème ne permet pas de modifier la couleur de ces éléments depuis le CSS. Il faut donc passer par le fichier Pelicanconf.py et modifier la variable PRIMARY_COLOR en mettant le nom anglais de la couleur souhaitée comme ci-dessous la couleur yellow

<img src="img/modif-header.png">

La variable ACCENT_COLOR permet de choisir la couleur des liens cliquables. Par conséquent comme ACCENT_COLOR est réglée sur orange,

<img src="img/exemple-lien.png">

Voici donc plusieurs exemples de chartes graphiques réalisables comme celle-ci aux couleurs d'Augustine
<img src="img/charte-1.png">
Ou bien celle-ci pour un ton plus calme
<img src="img/charte-2.png">
Ou même celle-ci au couleurs du challenge Eco-Marathon
<img src="img/charte-3.png">

Pour modifier la couleur du texte dans le footer c'est à cet emplacement juste en dessous du code pour modifier le footer.

<img src="img/modif-texte-footer.png">

Et enfin pour modifier les couleurs des catégories dans le header quand on passe la souris dessus ça se passe ici

<img src="img/couleurs-categories.png">