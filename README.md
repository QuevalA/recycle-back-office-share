# reCycle

## Table des matières
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Principales dépendances](#principales-dépendances)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Contributeurs](#contributeurs)

<br>

## Introduction
**reCycle** est une plateforme permettant aux utilisateurs d’échanger des biens et services sans impliquer d’argent.
De cette manière, ils peuvent donner une seconde vie à des objets dont ils n’ont plus besoin, et ceux qui n’en ont pas à distribuer peuvent toujours s’impliquer en proposant leurs compétences à travers des services.
Cette application est grandement inspirée de Leboncoin et Geev.

Un système de points a été pensé pour équilibrer les échanges, garantissant que plus vous donnez, plus vous êtes en mesure de recevoir. Chaque utilisateur a un profil public qui affiche son expérience dans l’application, incluant sa date d’inscription et le nombre de transactions qu’il a conclu avec succès.

Du point de vue technique, reCycle est basée sur un back-end Symfony servant d’API à des interfaces web en React.js (publique et back-office) et une interface mobile en React native. L'API REST est sécurisée par JWT.

**Ce dépôt contient la partie back office du projet.**

Partie back end : https://github.com/QuevalA/recycle-back-share
<br>Partie front end : https://github.com/QuevalA/recycle-front-web-share
<br>Partie mobile : https://github.com/QuevalA/recycle-front-mobile-share

<br>

## Technologies
- **React** : Une bibliothèque JavaScript pour la construction d'interfaces utilisateur.
- **Redux Toolkit** : Une boîte à outils pour la gestion de l'état de l'application.
- **React Router DOM** : Une bibliothèque de routage pour React.
- **Tailwind CSS** : Un framework CSS utilitaire pour la conception d'interfaces utilisateur.
- **Emotion** : Une bibliothèque pour écrire des styles CSS avec JavaScript.
- **Material-UI** : Une bibliothèque de composants React pour une interface utilisateur rapide et réactive.
- **Axios** : Une bibliothèque HTTP client pour JavaScript.
- **JWT Decode** : Une bibliothèque pour décoder JSON Web Tokens.
- **Multer** : Middleware de gestion de fichiers pour Node.js.
- **QS** : Une bibliothèque pour sérialiser des objets en chaînes de requête URL.
- **React Dropzone** : Une zone de dépôt de fichiers React pour les téléchargements de fichiers.
- **React Loader Spinner** : Un composant de spinner pour React.
- **Testing Library** : Une suite d'outils pour tester des applications React.

<br>

## Principales dépendances
- **React**
- **Redux Toolkit**
- **React Router DOM**
- **Tailwind CSS**
- **Axios**
- **Material-UI**

<br>

## Prérequis
Avant de commencer l'installation et l'utilisation de ce projet, assurez-vous que votre environnement répond aux prérequis suivants :

- **Node.js**: Vous pouvez le télécharger depuis nodejs.org.
- **npm**: (inclus avec Node.js) : Utilisé pour gérer les dépendances JavaScript.
- **Git**: Pour cloner le dépôt du projet. Téléchargez-le depuis git-scm.com.

<br>

## Installation
1. Cloner le projet en local.
2. Installez les dépendances : `npm install`
3. Installez les dépendances : `npm start`
4. Ouvrez http://localhost:3000 pour voir l'application dans votre navigateur. La page se rechargera automatiquement si vous apportez des modifications au code source.

<br>

## Contributeurs
Kévin Terrier, Curtis Marty-Jackson, Alexis Carrere, Adam Queval.