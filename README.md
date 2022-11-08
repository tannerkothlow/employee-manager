# Week 9: README Generator

## Description



## Installation

Once the repo is cloned to your machine, run **npm i** to instal dependencies, notably Jest and Inquirer.

To run the program, open index.js in an integrated terminal and run **node index.js**.

## Usage

- After starting the program, you will be presented with an initial prompt to fill out a team manager's information.

![init prompt](./assets/images/manager_prompt.PNG)

- After submitting all that team member's information, you will have the option to add an Engineer, Intern, or to APPLY your current team.

![engineer prompt](./assets/images/engineer_prompt.PNG)

![intern prompt](./assets/images/intern_prompt.PNG)

- Once you have entered all the team members you want, apply the current team.

- This will generate an HTML document in the **output** folder.

- The **output** folder comes with a stylesheet that will be applied to the generated HTML.

![output](./assets/images/html_location.PNG)

- Previewing the document will display the team you entered, with each member having their own card.

![output](./assets/images/generated_html.PNG)

## Testing

To run tests after having installed Jest, enter **npm run test** in the terminal.

NOTE: To run tests for html-gen.js, comment out the current makeCard function and the currently exported class. Then uncomment the test class at the bottom of the document.

## License 

Standard MIT license, coursework.