

Projet 7 - Créez une application web de location immobilière avec React

Contexte:
-Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET. L'entreprise souhaite donc la refonte totale de son site web avec React.

React Router :
-Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
-Il existe une page par route.
-La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
-La logique du routeur est réunie dans un seul fichier.

Contraintes fonctionnelles:
Pour le défilement des photos dans la galerie (composant Gallery) :
-Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image et inversement.
-S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" n'apparaissent pas.
-Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page, le clic de l'utilisateur permet de l'ouvrir ou fermer.
