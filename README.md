# Ticket Management System / Help Desk

## Project Overview: 
React web based application for ticket management and ticket submission. Refer to './DEV_NOTES.md' for more information. 

> Try it out here: [TICKET-SYSTEM](https://ticketsystem-a4980.web.app)

**NOTE: Please reach out to the developer for sample authentication to login and test the application.**

<p align="center">
 <img src="https://github.com/wiris316/TicketManagementSystem/assets/124114572/1fcf0eb8-2d4c-430f-b0c1-3c8cba4c51e4" width="700"/>
</p>

<div align="center">
 
![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28.svg?style=for-the-badge&logo=Firebase&logoColor=black)
![MUI](https://img.shields.io/badge/MUI-007FFF.svg?style=for-the-badge&logo=MUI&logoColor=white)
![SCSS](https://img.shields.io/badge/_-SCSS-C6538C.svg?style=for-the-badge)

</div>

## Features
- **Help Desk / Ticket Management:** Keep track of your tickets in an organized dashboard; sorting ticket status by "new", "in progress", and "resolved".
- **User-Friendly Ticket Submission:** Simple and easy ticket submission process that ensures a smooth and effortless experience for users.
- **Shared Sign-in Platform for Users and Admin:** Shared sign-in platform for both users and adminstrators, providing a streamlined authentication process for accessing ticket submission form and admin ticket dashboard.
- **Firebase Authentication:** Leveraging Firebase Authentication's built-in support for email and password-based authentication, allowing users convenient sign-in access without the need for third-party authentication providers (Dev note: Security rules can be applied to control access based on user authentication and roles).
- **Intuitive Interface and Responsive Design:** Application is optimized for different screen sizes, providing users with a consistent and intuitive experience.


<p align="center">
<img src="https://github.com/wiris316/TicketManagementSystem/assets/124114572/5f7aa8f7-b97a-4b23-9a2f-ee5a4c7ac382" width="350"/>
<img src="https://github.com/wiris316/TicketManagementSystem/assets/124114572/040dadd4-0ce9-4c80-b03a-89e9ab6f3ca3" width="400"/>
</p>


## File Structure
```bash
TicketManagementSystem/TicketManagementSystem
 ├── src
 |	├── assets
 |    ├── Dashboard.scss
 |    ├── DetailsModal.scss
 |    ├── Login.scss
 |    ├── TicketCard.scss
 |    ├── TicketColumn.scss
 |    ├── TicketForm.scss
 |    ├── UpdateModal.scss
 |	├── components
 |		├── modals
 |			├── DetailsModal.jsx
 |			├── UpdateModal.jsx
 |		├── Dashboard.jsx
 |		├── Login.jsx
 |		├── TicketCard.jsx
 |		├── TicketColumn.jsx
 |		├── TicketForm.jsx
 |	├── components
 |		├── api.jsx
 |	├── App.css
 |	├── App.jsx
 |	├── index.css
 |	├── main.jsx
 ├── index.html
```

## Prerequisites
In order to run this application and connect to Firestore, you'll need to provide your own Firebase configuration information. Follow the steps below to set up Firebase for this application or refer to the offical documenations here: https://firebase.google.com/docs/web/setup

  1.  Create a Firebase project:
      -  Go to the Firebase Console.
      -  Click on "Add project" and follow the prompts to create a new Firebase project.

  2.  Add Firebase to your web app:
      -  Once your project is created, click on "Add app" and select the web platform.
      -  Follow the instructions to register your app and obtain your Firebase configuration object (save it for step 4).

  3.  Enable Firestore:
      -  Go to the "Firestore Database" section in your Firebase project.
      -  Click on "Create database" and follow the prompts to set up Firestore.

  4.  Update Firebase configuration:
      -  In this project, navigate to './TicketManagementSystem/src/services/api.jsx' and locate the 'firebaseConfig' object and replace it's placeholder values with your Firebase configuration values (refer to step 2).

  5.  Start the application:
      -  After updating the Firebase configuration, you can now run the application and interact with Firestore.

## Getting Started
```bash
# Clone the repository
gh repo clone your-username/TicketManagementSystem

# Navigate to the project directory
cd TicketManagementSystem/TicketManagementSystem

# Install the dependencies
npm install

# Start the development server
npm run dev
```

