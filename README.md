# Quiz-App

Quiz-App is an interactive, user-friendly application designed for both educational and entertainment purposes. It offers a dynamic way to test knowledge across a variety of subjects, making it suitable for users of all ages and backgrounds.

Features
- Real-Time Feedback: Instant feedback on answers to help users learn and improve.
- Score Tracking: Keeps track of users' scores and progress over time.
- User-Friendly Interface: An intuitive and engaging interface that makes navigation and quiz-taking seamless.
- Multi-Platform Support: Accessible on various devices, ensuring a flexible quiz experience.

![image](https://github.com/Cepako/Quiz-App/assets/131913675/106ad9d9-2d25-48d1-9b97-b92163f8af30)


Technologies Used
- JavaScript (for frontend functionality)
- HTML & CSS (for structuring and styling)
  
Installation via NPM (Node Package Manager)

To install and run the Quiz Application using NPM, follow these steps:

Prerequisites
- Ensure that Node.js and NPM are installed on your machine. If not, download and install Node.js from the official website.

Step 1: Clone the Repository

Clone the repository to your local machine by running the following command:
- git clone [REPOSITORY_URL]
  
Replace [REPOSITORY_URL] with the actual URL of the repository.

Step 2: Navigate to the Project Directory

Change to the project's root directory by executing:
- cd [PROJECT_DIRECTORY]
  
Replace [PROJECT_DIRECTORY] with the actual directory name where the project was cloned.

Step 3: Install Dependencies

Install the necessary dependencies by executing:
- npm install
  
This command installs all the packages defined in the package.json file.

Step 4: Start the Application

Run the application by executing:
- npm start

This command will start a development server, and the application should automatically open in your default web browser. If not, you can access the application by navigating to http://localhost:8080/ or the port specified in your terminal.

Step 5: Build for Production (Optional)

To build the application for production, execute:
- npm run prod
  
This command will create a dist directory with optimized and minified code ready for deployment.

Conclusion
The application should now be running locally on your machine, and you can explore and interact with the Quiz Application’s features.

Note: Make sure to customize the above instructions based on the actual configuration and structure of the Quiz Application in the repository.

Installation

- Clone the repository to your machine using git clone.
- Navigate to the project directory dist and open the index.html file in your browser.

How to Use

- Open the application in a web browser.
- Chose correct answer.
- Click the "Next" button to go to next question.
- After all questions u will receive  your score.

You can add your own questions

- add object in "questions" array like this

![image](https://github.com/Cepako/Quiz-App/assets/131913675/7c9587d0-a098-4b20-94bd-c51443bc1277)

- question - your question
- asnwers - four answers
- correctAnswer - index of correct answer (index 0 = first answer is correct)

Feedback and pull requests are warmly welcomed!☕💻
