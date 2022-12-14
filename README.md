# Kilimanjaro

## Project description

Travel Lingo is a web based application that provides the platform by which anyone can in the quickest and most efficient way learn the basics to a new language. This project was initiated as a result of the language barrier challenges people face as they immigrate or travel to a new states that don’t speak one’s familiar language. The system will teach you as well as test you on your understanding of the new language, to gauge your level of proficiency. To realize the success of this software, a word game has been incorporated into the application for better interactive learning. In the event a learner needs clarity on a specific issue, the software provides a mechanism by which they can post a question on the forum where a language guru will attend to their query.

## Team Members and Roles

* Annette Odingo (System Analyst, Software Developer)
* Samuel Hudson Manwa Maangi (Software Engineer, GUI)

## Prerequisites (Technical user and installation guide)

Installation requirements
-	Computer with processor 1.7 GHz or higher
- Microsoft Windows & or latest versions
- A Minimum of 1GB  RAM
- At least 200MB hard disk storage space
- A mouse or pointing device

## Run Instructions
### Endpoints: 
 - POST /questions -> all users can ask a question
 - GET /tests -> all users can take a test
 - GET /questions/answered -> all users can see answered questions
 - POST /users -> all users can register
 - POST /users/login -> all users can login
 //authenticated routes
 - PUT /questions -> guru can answer a question
 - POST /tests -> guru can add tests
 - DELETE /questions -> guru can delete irrelevant questions

### To run back-end locally
- Navigate to src/ backend
- Create a .env file
- Add the  environment variables: NODE_ENV, JWT_SECRET, Mongo_Uri and port number
- Run on the terminal :   npm  insall
- Run on the terminal :  npm run server

### To visit deployed backend site :
navigate to:  https://travellingo.onrender.com/api

### To run front-end locally
- Navigate to traveling
- Run npm i 
- Create a .env file
- Add the environment variables :  REACT_APP_BASE_URL 
- Run on the terminal: npm start

### To visit deployed front-end site :
navigate to:  https://base-fvw2.vercel.app/

#### Note: For back-end will be hosting on render.com and for front-end we will be hosting on vercel
