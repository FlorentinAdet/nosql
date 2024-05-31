# Projet Node.js avec Express et MongoDB : Recherche des écoles MATERNELLE, primaires et élémentaires par département

Ce projet est une application Node.js utilisant Express comme framework web et MongoDB comme base de données.
L'objectif est de fournir un service permettant de rechercher les écoles élémentaires et primaires dans différents départements en utilisant les données provenant de data.gouv : https://www.data.gouv.fr/fr/datasets/effectifs-deleves-par-niveau-et-nombre-de-classes-par-ecole-date-dobservation-au-debut-du-mois-doctobre-chaque-annee/#/resources

## Installation

1. Cloner le dépôt Git :
```bash
git clone https://github.com/FlorentinAdet/nosql.git
```

2. Accèder au dossier
```bash
cd tonprojet
```

3. Installer les dépendances
```bash
npm install
```
4. Import les données du fichier .CSV dans une base de données mongoDB
   
5. Lancer le projet
```bash
npm start
```
## Endpoints :   

### GET /ecoles/secteur/:secteur
Description : Récupère toutes les écoles du secteur PRIVE / PUBLIC .

Paramètres : Aucun

Réponse :
```JSON
{
        "_id": "664f8552324816ee5b9fa862",
        "rentree_scolaire": 2022,
        "region_academique": "HAUTS-DE-FRANCE",
        "academie": "LILLE",
        "departement": "NORD",
        "commune": "VALENCIENNES",
        "numero_ecole": "0592400N",
        "denomination_principale": "ECOLE MATERNELLE PUBLIQUE",
        "patronyme": "ANNA FOUCART",
        "secteur": "PUBLIC",
        "rep": 0,
        "rep_plus": 0,
        "nombre_total_classes": 5,
        "nombre_total_eleves": "95",
        "nombre_eleves_preelementaire_hors_ulis": 95,
        "nombre_eleves_elementaire_hors_ulis": 0,
        "nombre_eleves_ulis": 0,
        "nombre_eleves_cp_hors_ulis": 0,
        "nombre_eleves_ce1_hors_ulis": 0,
        "nombre_eleves_ce2_hors_ulis": 0,
        "nombre_eleves_cm1_hors_ulis": 0,
        "nombre_eleves_cm2_hors_ulis": 0,
        "tri": "78-HAUTS-DE-FRANCE-LILLE-NORD-VALENCIENNES-0592400N",
        "code_postal": "59300"
    },...
```

### GET /ecoles/annee/:annee
Description : Récupère toutes les écoles par année ( 2019 / 2020 / 2021 / 2022 ).

Paramètres : Aucun

Réponse :
```JSON
{
        "_id": "664f8552324816ee5b9fa862",
        "rentree_scolaire": 2022,
        "region_academique": "HAUTS-DE-FRANCE",
        "academie": "LILLE",
        "departement": "NORD",
        "commune": "VALENCIENNES",
        "numero_ecole": "0592400N",
        "denomination_principale": "ECOLE MATERNELLE PUBLIQUE",
        "patronyme": "ANNA FOUCART",
        "secteur": "PUBLIC",
        "rep": 0,
        "rep_plus": 0,
        "nombre_total_classes": 5,
        "nombre_total_eleves": "95",
        "nombre_eleves_preelementaire_hors_ulis": 95,
        "nombre_eleves_elementaire_hors_ulis": 0,
        "nombre_eleves_ulis": 0,
        "nombre_eleves_cp_hors_ulis": 0,
        "nombre_eleves_ce1_hors_ulis": 0,
        "nombre_eleves_ce2_hors_ulis": 0,
        "nombre_eleves_cm1_hors_ulis": 0,
        "nombre_eleves_cm2_hors_ulis": 0,
        "tri": "78-HAUTS-DE-FRANCE-LILLE-NORD-VALENCIENNES-0592400N",
        "code_postal": "59300"
    },...
```
### GET /ecoles/commune/:commune
Description : Récupère toutes les écoles en fonction de la commune ( Valenciennes ).

Paramètres : Aucun

Réponse :
```JSON
{
        "_id": "664f8552324816ee5b9fa862",
        "rentree_scolaire": 2022,
        "region_academique": "HAUTS-DE-FRANCE",
        "academie": "LILLE",
        "departement": "NORD",
        "commune": "VALENCIENNES",
        "numero_ecole": "0592400N",
        "denomination_principale": "ECOLE MATERNELLE PUBLIQUE",
        "patronyme": "ANNA FOUCART",
        "secteur": "PUBLIC",
        "rep": 0,
        "rep_plus": 0,
        "nombre_total_classes": 5,
        "nombre_total_eleves": "95",
        "nombre_eleves_preelementaire_hors_ulis": 95,
        "nombre_eleves_elementaire_hors_ulis": 0,
        "nombre_eleves_ulis": 0,
        "nombre_eleves_cp_hors_ulis": 0,
        "nombre_eleves_ce1_hors_ulis": 0,
        "nombre_eleves_ce2_hors_ulis": 0,
        "nombre_eleves_cm1_hors_ulis": 0,
        "nombre_eleves_cm2_hors_ulis": 0,
        "tri": "78-HAUTS-DE-FRANCE-LILLE-NORD-VALENCIENNES-0592400N",
        "code_postal": "59300"
    },...
```
### UPDATE /update/ecole/:id
Description : Met à jour les paramètres d'une école.

Paramètres : content-type JSON avec les paramètres voulant être modifiés 
Exemple : 
{
    "secteur": "PRIVE",
    "rentree_scolaire": "2021"
}

Réponse :
```JSON
{
    "secteur": "PRIVE",
    "rentree_scolaire": "2021"
}
```

### DELETE /delete/ecole/:id
Description : Supprime l'école voulu via l'id.

Paramètres : Aucun

Réponse :
```JSON
{
    "message": "Ecole supprimé avec succès"
}
```

### Membres du groupe :
ADET Florentin  
THUILLIEZ Léo  
LEFEBVRE Maxime  
VENET Thibault  
 
