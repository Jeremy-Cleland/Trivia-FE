# Software Requirements

## Vision

**Battle of the Minds**(BotM) is a Trivia SPA that interacts with the **OTDB**(Open Trivia DB) API in order provide questions to the user in our trivia game. The purpose of this project is to create a trivia game that also meets our project requirements of creating a full-stack app that interacts with an outside API and uses a NoSQL Mongo database with CRUD functionality. This product provides a fun outlet, as well as intellectual stimulation; it also serves as an educational tool for us as growing full-stack developers.

## Scope (In/Out)

### IN - What will your product do

- The web app will provide questions from various categories for the user to attempt to answer
- The web app will provide affirmation (or shaming) depending on whether the prvided answer is correct
- The web app will allow a user login/logout to their account in order to save their user profile
- The web app will allow the user to choose the difficulty level of the questions
- The web app will allow the user to choose the category of their questions, or randomize the selection

### OUT - What will your product not do.

- The web app will not be an IOS or Android app
- The web app will not use a SQL database

### Minimum Viable Product vs

The MVP for BotM will be a SPA that interacts with the OTDB to dynamically create a trivia game catered to the categories and difficulty level selected by the user. BotM will also utilize MongoDB to allow the user to save information, and Auth0 for login/logout functionality.

### Stretch Goals

- The user can submit their own questions
- The landing page will utilize the CSS Animations library to add "pizzazz" which will bring new users in, who will in turn tell their friends to also check it out
- The app will use Socket.IO to add multiplayer functionality
- The app will allow images to be added in (Imgur API) based on category to spice up the presentation
- The app will provide a user with a fun fact about the material covered by the question

## Functional Requirements

- A user can update their login information
- A user can search all of the question categories
- A user can view their high scores
- A user can modify the game options (difficulty, question count, category, etc.) to dynamically structure their game type

## Data Flow

![Miro Data Flow](./src/Data/BotM%20Data%20Flow.png)

## Non-Functional Requirements

### Security

A user will be authorized on the backend before they're able to access profile information. On the frontend, a user will be authenticated using the Auth0 library functionality.

### Documentation

Our group will provide documentation for each piece of our project in order to provide a foundation for our development, and information for anyone who may view our repositories.
