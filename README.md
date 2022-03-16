# Front End Development Certification (FreeCodeCamp) - Exam 1/5

## Explanation

I have to create 5 applications in order to earn the Front End Development certification delivered by FreeCodeCamp. This repository is the first one : Random Quote Machine. You can [read the specifications](https://github.com/lamai6/random-quote-machine#specifications) the app must meet or [run it](https://github.com/lamai6/random-quote-machine#specifications).

## Quick start

1. Make sure that you have Node.js v12 and npm v5 or above installed
2. Clone this repo using git clone: `git clone git@github.com:lamai6/random-quote-machine.git <YOUR_PROJECT_NAME>`
3. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`
4. Run `npm install` in order to install dependencies
5. At this point you can run `npm start` to see the React app at http://localhost:8080

## Specifications

Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/qRZeGZ.

Fulfill the below user stories and get all of the tests to pass. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks.

User Story #1: I can see a wrapper element with a corresponding id="quote-box".

User Story #2: Within #quote-box, I can see an element with a corresponding id="text".

User Story #3: Within #quote-box, I can see an element with a corresponding id="author".

User Story #4: Within #quote-box, I can see a clickable element with a corresponding id="new-quote".

User Story #5: Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".

User Story #6: On first load, my quote machine displays a random quote in the element with id="text".

User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".

User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.

User Story #9: My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.

User Story #10: I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.

User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.

Note: Twitter does not allow links to be loaded in an iframe. Try using the target="_blank" or target="_top" attribute on the #tweet-quote element if your tweet won't load. target="_top" will replace the current tab so make sure your work is saved.