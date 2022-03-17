# Documentatie OBA Sport en voeding

- [Link naar project:](#link-naar-project)
- [Beschrijving:](#beschrijving)
- [User story:](#user-story)
- [Alle verschillende schermen:](#alle-verschillende-schermen)
- [Installatie:](#installatie)
- [Gebruik:](#gebruik)
- [Externe gegevensbron:](#externe-gegevensbron)
- [Wensenlijst:](#wensenlijst)

## Link naar project:
https://dustinschouten.github.io/project-1-2021/#overzicht

## Beschrijving:
Dit project is gemaakt en bedoeld voor de sportieve Amsterdamse twintiger die op zoek is naar boeken over gezonde voeding en sport. Het is een single page website die volledig is gemaakt met HTML, CSS en JavaScript waarbij er gebruikgemaakt wordt van de fetch API om data op te halen. Vervolgens worden er op basis van de opgehaalde data boeken gerenderd waarbij de gebruiker naar zijn/haar favoriete boek kan zoeken m.b.v. filters.

## User story: 
Als sportieve twintiger wil ik mij verdiepen in het effect van gezonde voeding op mijn conditie, om te leren hoe ik mijn sport beter kan beoefenen.

## Alle verschillende schermen:
Dit project kent een aantal verschillende schermen Zie de screenshot hieronder:
![](projectbeschrijving_images/screenshots.jpg)

## Installatie:
Om dit project te installeren, dien je deze repo te clonen naar je apparaat:
Dit doe je met `git clone https://github.com/DustinSchouten/project-1-2021.git`
Gebruik een live server om de website te hosten. De app werkt niet als je deze vanaf je bestandssysteem laat draaien. Zorg ook dat je de CORS extension van chrome hebt geactiveerd.

## Gebruik:
Het gebruik van deze website is relatief eenvoudig, door het beperkte aantal interacties dat de app heeft. Op de website worden boeken getoond en kunnen er twee filters worden gebruikt om nog specfieker te zoeken op de boeken.

Met de eerste filter kan er gefilterd wordt op categorie en met de tweede filter kan er gefilterd wordt op de taal waarin het boek geschreven is.

## Externe gegevensbron:
De data die in deze single page app wordt gebruikt, is afkomstig van twee data-API's. Om de data op te halen is gebruikgemaakt van de fetch API.

De eerste data-API is:
`${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`

De tweede data-API is:
`${endpoint}${query}&authorization=${key}&output=json`

In deze gegevensbronnen bevinden zich een aantal data-objecten. Uit elk object worden onderstaande waardes gehaald:
- de titel van het boek
- de naam van de auteur
- de taal
- en beschrijving van het boek

## Wensenlijst:
De volgende aspecten zou ik in de toekomst willen toevoegen:
- Wanneer de gebruiker op een boek (list item) klikt, wil ik een popup scherm laten tonen waarbij er meer informatie getoond wordt en de informatie beter te lezen is.

