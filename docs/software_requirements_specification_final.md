# Overview

This document is the software-requirements specification document and it outlines the tasks that the system must do, as well as characteristics the system shall possess. The requirements are broken down into two categories: Functional and Non-functional requirements. The functional requirements specify the processes to perform while the Non-functional requirements outline the behavioral properties the system must have. Listing the requirements enables us define the scope of the system, thus preventing scope creep or inadequate features in the final deliverable

# Software Requirements

<Describe the structure of this section>

## Functional Requirements

### Create Administrator 

| ID  | Requirement |
| :-------------: | :----------: |
| FR1 | The system shall allow for the creation of an administrator when the sign up button is pressed |
| FR2 | The application shall validate and verify the administrator’s username and password before allowing access to the system. |
| FR3 | The system shall display the admin page that gives administrative privileges once, the Login button is clicked. |
| FR4 | The system shall allow the administrator to view and answer questions posted by the learners. |
| FR5 | The system shall facilitate the administrator to display out the responses to the questions made to the home page for the users to view |

### Facilitate game 

| ID  | Requirement |
| :-------------: | :----------: |
| FR6 | Once clicked, the play game icon on the menu bar shall allow users to go to the play game page |
| FR7 | The Web application shall prompt user to input a correct solution based on the problem the game posts. |
| FR8 | The system shall indicate the word count of correct attempts made at the top of the gaming module screen |
| FR9 | The software shall outline the words in the puzzle once a user inputs a suggestion in the text box below the game |
| FR10 | The system shall display different emoticons based on the progress made by the gamer, starting with a frown face for lower points scored and changes to a happy face once more points are collected |
| FR11 | Once the check word button is clicked, the system shall output the outcome of a word choice in the game. |
  
### Manage tests 

| ID  | Requirement |
| :-------------: | :----------: |
| FR12 | The software shall allow users as well as administrators to undertake a test in the event the user wants to test their language proficiency |
| FR13 | The system shall diminish the difficulty level of the questions in the test in the event the user doesn’t get an answer to a question correctly |
| FR14 | The application shall increase the difficulty level of the questions in the test in the event the user answers a question correctly up to the highest difficulty level. |
| FR15 | The system shall have a timer for every question set to 20 seconds. |
| FR16 | The application shall proceed to the next question once 20 second time frame elapse and an answer to a question is not delivered.|
| FR17 | The system shall provide a 4 multiple choice answer to each question posted in the test. |
  
### Facilitate landing

| ID  | Requirement |
| :-------------: | :----------: |
| FR18 | The system shall provide 5 broad categories of functionalities at the navigation menu leading the user or administrator to the desired content they prefer |
| FR19 | Once clicked, the Home, Quiz, Curriculum. Game or Admin modules will project the desired page for software utilization |
| FR20 | The system shall make available the Home in the navigation as the default page once the application is launched for the first time |
| FR21 | The application shall allow the user to ask pertinent questions concerning the Language at the Home page for further clarification from the experts |
| FR22 | The Software shall post a set of previously answered prompts at the Home page for the users to view related questions as well as for other users to learn if they had similar questions. |
| FR23 | Once a user posts a questions, the system shall pop up a dialog box indicating that the question has been received and is currently being processed by the language experts. |
  
### Define Curriculum 

| ID  | Requirement |
| :-------------: | :----------: |
| FR24 | The system shall allow the user to hover over the desired study material they desire once they click on the Curriculum page |
| FR25 | The application shall provide five initial language learning materials that comprise of numbers, Common words, Foods, Directions and greetings for learners to get started on a language. |
| FR26 | The initial categories of language learning materials shall include circular disks with pictorial illustrations of the subject administered in order to make it easier for new language users to navigate the content. |
| FR27 | Once a specific category is selected, the system shall display several language learning interactive cards with translations from English as well as pictorials. |
| FR28 | The software shall facilitate learning in a simple efficient manner by placing the foreign language word side by side the English word in order to create a visual impression in the learners mind. |

## Non-Functional Requirements

### Performance Requirements 

| ID  | Requirement |
| :-------------: | :----------: |
| NFR1 | The system shall be able to mark a test undertaken in less than 5 seconds. |
| NFR2 | The system shall maintain optimal performance in terms of increased throughput by handling 1,000 users’ requests without adverse effects to response time.  |
| NFR3 | The system shall grade the test taken in less than 2 seconds after the marking phase is complete. |
| NFR4 | The system shall change the emoticons in the Gaming module in less than a second once progress is made in the game |
| NFR5 | The application make changes to the status bar indicating the progress of a test in less than a second once the user progresses to the next question.  |
  
### Security Requirements 

| ID  | Requirement |
| :-------------: | :----------: |
| NFR6 | The software shall only allow administrators access to set up a language |
| NFR7 | The system shall only accept passwords that are 8 characters or more and consists of a combination of lower and uppercase letters, at least one numbers and special characters.  |
| NFR8 | The application shall automatically logout an administrator once they stay logged in and there exists 7 minutes or more of idle time. |
| NFR9 | The Software shall mask the password field once an administrator inputs their password in the password box. |
| NFR10 | The system shall provide 5 attempts of unsuccessful logins for wrong passwords or emails, after which the system automatically exits the prompts to the Home to secure the Application  |
  
### Cultural and political requirements 

| ID  | Requirement |
| :-------------: | :----------: |
| NFR11 | The system shall be available for usage for people of all cultures and in all jurisdictions across the world. |
| NFR12 | The application shall allow for multi-lingual language learning, but the primary language for instruction shall be English  |
| NFR13 | The system shall allow for customization of language features and fields so that the language curriculum is in line with country specific information. |
| NFR14 | The application shall allow for the administrators of a language to make all unstated norms explicit such as the metrics of measurement based on the language under consideration |
| NFR15 | The system shall comply with the General Data Protection Regulation of the European Union on data protection and privacy of the data input in the software  |
  
### Usability

| ID  | Requirement |
| :-------------: | :----------: |
| NFR16 | The system shall provide ease of entry and accessibility into the software by allowing users as well as administrators to gain access to the system through the software website URL and Domain name. |
| NFR17 | The application shall provide ease of learning to the users by providing resource capabilities to easily learn the User Interface through pictorials and high contrast words |
| NFR18 | The system shall allow for easier handling by providing a Simple to navigate straight-forward Graphical User Interface that prevents user errors |
| NFR19 | The software shall provide for task times not exceeding 20 seconds maximum to maximize on the task efficiency and increase the chances of user understanding. |
| NFR20 | The system shall provide a fast responding Graphical User Interface with fast responding times of up to 1/7th of a second to enhance user experience.  |
  
### Operational requirements 

| ID  | Requirement |
| :-------------: | :----------: |
| NFR21 | The system shall be compatible with Chrome, Firefox, Opera and Microsoft Edge browsers. |
| NFR22 | The system shall be operational if and only if there is connectivity to the internet since it is a web based software  |
| NFR23 | The application shall be operational in all portable smart devices both IOS and android devices. |
| NFR24 | The system shall accommodate new upcoming features and future works in the event there is need to update the current software version. |
| NFR25 | The Web application shall be ubiquitous and available to the users at all times regardless of their geographical locations.  |
