   # Overview

This document is the software-requirements specification document and it outlines the tasks that the system must do, as well as characteristics the system shall possess. The requirements are broken down into two categories: Functional and Non-functional requirements. The functional requirements specify the processes to perform while the Non-functional requirements outline the behavioral properties the system must have. Listing the requirements enables us define the scope of the system, thus preventing scope creep or inadequate features in the final deliverable

# Software Requirements

<Describe the structure of this section>

## Functional Requirements

### Administrator Login 

| ID  | Requirement |
| :-------------: | :----------: |
| FR1 | The system shall allow for the creation of an administrator when the sign up button is pressed. |
| FR2 | The application shall validate and verify the administrator’s username and password before allowing access to the system. |
| FR3 | he system shall display the admin page that gives administrative privileges once, the Login button is clicked. |

### Game module 

| ID  | Requirement |
| :-------------: | :----------: |
| FR4 | Once clicked, the play game icon on the menu bar shall allow users to go to the play game page. |
| FR5 | The Web application shall prompt user to input a correct solution based on the challenge the game posts. |
  
### Manage tests 

| ID  | Requirement |
| :-------------: | :----------: |
| FR6 | The software shall allow users as well as administrators to undertake a test in the event the user wants to test their language proficiency. |
| FR7 | The system shall diminish the difficulty level of a test in the event the user doesn’t meet the 50%-mark threshold. |
| FR8 | The application shall increase the difficulty level of a test in the event the user surpasses the 96%-mark, onto a higher level test. |
  
### Define language 

| ID  | Requirement |
| :-------------: | :----------: |
| FR9 | The system shall allow the administrator to input new words in the language by clicking the append words button. |
| FR10 | The software shall relay language inquiries asked by users to administrators, who shall provide their expertise on the questions. |

## Non-Functional Requirements

### Performance Requirements 

| ID  | Requirement |
| :-------------: | :----------: |
| NFR1 | The system shall be able to mark and grade the results of a test undertaken in less than 2 seconds. |
| NFR2 | The system shall maintain optimal performance in terms of increased throughput by handling 5 million users simultaneously without affecting its response time.  |
  
### Security Requirements

| ID  | Requirement |
| :-------------: | :----------: |
| NFR3 | The software shall only allow administrators access to set up a language |
| NFR4 | The system shall only accept passwords that are 8 characters or more and consists of a combination of lower and uppercase letters, at least one numbers and special characters.  |
  
### Cultural and political requirements 

| ID  | Requirement |
| :-------------: | :----------: |
| NFR5 | The system shall be available for usage for people of all cultures and in all jurisdictions across the world. |

  
### Operational requirements 

| ID  | Requirement |
| :-------------: | :----------: |
| NFR6 | The system shall be compatible with Chrome, Firefox, Opera and Microsoft Edge browsers. |
| NFR7 | The Web application shall be ubiquitous and available to the users at all times regardless of their geographical locations |
