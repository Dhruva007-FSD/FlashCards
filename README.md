# Simple Flashcard Application

This project is a basic web application that allows users to create and view flashcards. Flashcards are stored in the browser's local storage.

## Features

* **Add Flashcards:** Users can input a student ID, a question, and an answer to create a new flashcard. The application automatically attempts to categorize the flashcard into a subject based on keywords in the question.
* **View Flashcards:** Users can retrieve flashcards for a specific student ID. They can also specify a limit on the number of flashcards to display, or view all flashcards for that student. The retrieved flashcards are displayed in a shuffled order.
* **Subject Categorization:** The application uses a predefined list of keywords to automatically assign a subject (Python, Chemistry, Biology, Mathematics, Physics, or General) to each flashcard based on the question content.
* **Local Storage:** Flashcards are stored in the browser's local storage, meaning the data persists even after the browser is closed.

## Technologies Used

* **HTML:** For structuring the web page.
* **CSS:** For styling the user interface.
* **JavaScript:** For handling the application logic, including form submission, data storage, retrieval, shuffling, and DOM manipulation.

## How to Use

1.  **Open `index.html` in your web browser.** (You would need to create an `index.html` file with the necessary HTML structure linking to the `script.js` and `style.css` files).

2.  **Adding Flashcards:**
    * In the "Add New Flashcard" section, enter the Student ID, Question, and Answer in the respective input fields.
    * Click the "Add Flashcard" button.
    * A confirmation message will appear briefly indicating the flashcard has been added and the detected subject.

3.  **Viewing Flashcards:**
    * In the "Get Flashcards" section, enter the Student ID of the student whose flashcards you want to view.
    * Optionally, enter a number in the "Limit" field to specify how many flashcards to display. Enter `0` or leave it empty to view all flashcards for that student.
    * Click the "Get Flashcards" button.
    * The retrieved flashcards will be displayed below in the "Flashcards" section. Each flashcard will show its subject, question, and answer.

## Project Structure

* `index.html`: (This file is not provided in the code, but it would contain the HTML structure for the forms and display areas, linking to `script.js` and `style.css`).
* `script.js`: Contains the JavaScript code for the flashcard application logic.
* `style.css`: Contains the CSS code for styling the web page elements.

## Potential Improvements

* **Edit and Delete Flashcards:** Implement functionality to edit existing flashcards and delete them from local storage.
* **More Sophisticated Subject Detection:** Enhance the `getSubject` function to use more advanced natural language processing techniques for more accurate subject categorization.
* **User Interface Enhancements:** Improve the visual design and user experience of the application.
* **Error Handling:** Add more robust error handling for invalid inputs.
* **Multiple Students:** Allow management of flashcards for multiple students more effectively.
* **Import/Export:** Implement functionality to import and export flashcard data (e.g., in JSON format).
