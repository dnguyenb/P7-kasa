

➡️ Projet 7 - Créez une application web de location immobilière avec React

✔️ Contexte:
-Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important.
-Refonte totale pour passer à une stack complète JavaScript avec Node et React.
-Commande de nouvelles maquettes fourni ici : (Maquette Figma).
-L'objectif est donc de démarer le projet React et développer l'ensemble de l'application.

🛠️ Contraintes techniques:
React :
Il est impératif d’utiliser ces éléments de React pour un code de qualité :
-Découpage en composants modulaires et réutilisables ;
-Un composant par fichier ;
-Structure logique des différents fichiers ;
-Utilisation des props entre les composants ;
-Utilisation du state dans les composants quand c'est nécessaire ;
-Gestion des événements ;
-Listes : React permet de faire des choses vraiment intéressantes avec les listes, en itérant dessus, par exemple avec map. Il faut les utiliser autant que possible.
Il est également recommandé, mais pas imposé, d’utiliser des composants fonctionnels plutôt que des composants classes.

React Router :
-Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
-Il existe une page par route.
-La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
-La logique du routeur est réunie dans un seul fichier.

Général :
-Le code ne doit pas produire d'erreur ou de warning dans la console.

⚙️ Contraintes fonctionnelles:
Pour le défilement des photos dans la galerie (composant Gallery) :
-Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image.
-Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image.
-S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" n'apparaissent pas.
-La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
-Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page.
-Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
-Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.
