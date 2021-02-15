### User Adventure

## User Info Page - Home
    1. Displays instructions for completing the puzzle
    2. Allows the user to create a profile
        a. Create a form
        b. Logic skill level selector option

## List Page
    1. Questions page with links to redirect user to each question
        a. UL of questions
        b. Links to each question page
        c. Cancel link if user has already answered this question
        d. Button for next, previous, and list
    2. Check if user has answered all questions
        a. If so, redirect to results page.
    3. If not, grab question data (id)
    4. Loop through question data to locate selected question by id
    5. Generate a title for each question

## Question Page
    1. Grab the id of the selected question from the URL (search params) 
    2. findById to populate the HTML file
        a. header
        b. paragraph
        c. form
        d. submit button        
    3. On submit, 
        a. Track users new state (total score)
        b. Put the new stats in local storage
        c. Send user to next question in list.

## Results Page
    1. Display user score along with custom message based on their final score
    2. Option to reset game
