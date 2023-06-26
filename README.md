# GitHub User Search - Front End Test

This is the FrontEnd test for Lovely Stay.
Before starting, I'd like to thank you for this opportunity.

Please NOTE: This site has been used and tested ONLY on Chrome.

For this test, I've used the following techs:
- Vite `yarn create vite [app-name] --template react-ts`
- React 18.2
- React Hooks (custom and pre-defined)
- Javascript
- Typescript
- SASS
- react-hook-form (to handle all the parts of the search field)
- Axios (for API requests)
- Zod (for schema validation)
- react-router (v6.2)
- Testing: vitest, react-testing-library & jsdom

I've also used the .env file (which has been committed to this repo). Please note that in a normal job scenario, I would never commit .ENV files to the repo.

## Getting Started

Firstly, please follow these instructions:

1. Go to your terminal and open the folder where you want to clone the app
2. Copy and paste the following line to bootstrap the app: `git clone https://github.com/devolab/lovelystay-frontend-test.git`
3. Once the clone has been completed, write: `github-user-search-test`
4. Write: `yarn` to install the node_modules
5. To start the development environment, run: `yarn dev`
6. Your browser should open running the application on `localhost:3000`. If it doesn't, please open a new browser window and type: `localhost:3000`

## Testing

I have made a few unit testing for some of the components. Due to time restrictions, I haven't tested the whole app. I hope it's enough.
To run tests, run the following script, and all files ending in `.test.tsx` will be evaluated:

```
$ yarn test
```

I've also included a coverage script. Please run this command:

```
$ yarn coverage
```

In both of the above cases, it will run `vitest`

### FEATURE DESIGN - Story
I use a feature-driven approach when I need to map the requirements.
In Jira, I create 1 story for each CRUD. Eg: Form to onboard users (POST) or Table to display users (GET)
Each story has a number of subtasks which are usually very small and easy to estimate.
Here are some examples of a feature story and subtasks based on this test requirements:

### STORY - GitHub User Search

##### Scenario (sub-task): Search Page Logo and sub description
1. Write TDD unit testing
2. Create an empty component
3. Add a Big image and size it with CSS
4. Make the image mobile friendly
5. Add sub-description text which says: "...."
6. Write CSS

##### Scenario (sub-task): Search Field for GitHub usernames 
1. Write TDD unit testing
2. Create an empty component
3. Add a Field with libraries
4. Create field validation
5. Write CSS

..etc..

### GitHub STRUCTURE
GitHub development and deployment structure are based on the stories.
This is what I do branch-wise:
- Create a Branch with the `Story Number / Title`
- Create sub-tasks which I complete and commit/merge to the `Feature branch (story branch)`
- Once the Feature branch is completed (the story is completed), I merge it with the `development` branch
- After a quick smoke test in the `development` branch, I merge it with the `integration` branch for QA
- If QA passes, I then merge it with the `staging` branch to allow testing from the client 
- If the client is happy, we plan a production release (no Fridays and no before holidays)


### My workflow: 

##### Planning
I spent a good 15/30min minutes understanding the requirements and mapping the application on a piece of paper.
On paper, I try to map the app architecture, flows, possible errors, and what they should be.
This would lead to creating UX designs, but this is usually a job for people with design expertise.

##### Refactoring basic react-app
When I get to the code, I start refactoring the basic react folder structure, by moving app.tsx / scss in a separate folder. 
Then I installed the dependencies I needed. Eg: `Axios`, `react-router`, etc... 

##### Writing code
I normally start from one component, and as soon as I start adding `states` and/or `useEffect` etc.., I decouple them into smaller components by following the S.O.L.I.D principles and dependency injection methodology. For CSS, unless I am using a framework (bootstrap, MUI, etc..), which I personally do not like, I create a structure of SCSS/SASS file with an index to reference all of them in one. 
Unit testing is usually done down to the file level, to keep as many things together.


That's it!!
