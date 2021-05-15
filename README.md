# Project- Flashcards
Application built with React that gives user functionality to create and edit their own study decks

## Context to Project
This project was meant as a final project for the frontend development portion of my Thinkful course, where I am mainly demonstrating my understanding of React concepts, especially useEffect and useState. In this fictional scenario, a local school is looking for a way to help their students study online, so their solution is to create a flashcard app. I developed all of the components for the project except the Header component.

## Features of the Project
The main components of the project include the following:
- Home
- Deck
- Edit/Add Card
- Create/Add Deck
- Study
I will detail a few of the components below here:

### Home
![Home Screen Screenshot](/img/home.jpg)
In the home screen, user are shown all of the study decks. They are allowed to either view, create, or delete decks from this screen, which, upon click asks confirmation from the user.

### Add Card
![Add Card Screenshot](/img/addcard.jpg)
This component includes a form element that allows users to create a new card with a name and description. Upon Save, an API post request is called to add the card to the list of decks.

### Study
![Study Deck Screenshot](/img/study.jpg)
In study, users are allowed to flip through the front and back of all cards in a deck. When the user clicks restart, they will either be redirected to start the study process all over or be redirected ot the home screen upon confirmation.

## Technologies
Here are the technologies and languages I used to develop this project:
- React
- JavaScript
- CSS3
- Bootstrap
- Node.js

## Learnings from this Project
In this project, I gained a deeper understanding of state and useEffect in React. I learned the importance of lifting state up, and declaring the correct dependencies in useEffect. It took me a little bit of problem solving in order to declare state variables once, rather than multiple times. 

## Future Plans for this Project
After I learn more about backend development, my plan for this project is to post it to the web, so that other people/students can use the flashcards. I would like to edit the header component and styling a little bit more to give it my own flare. 