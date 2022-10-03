## Building the app
1. Clone the repo
2. npm install 
3. nvm use v14.17.6 <br />
For development this nodeversion v14.17.6 is used https://nodejs.org/en/download/

## How to use:
On setup page (first page): Activate trackers you want to use.<br /> (currently not active)
Home page:<br />
    - Trackers: Shows activated trackers, from here you can create trackers.<br />
    - Logs: Logfile of all your documented trackers<br />
    
## How to start app
Run following command in a terminal, make sure to be in the /migraine-diary folder  
npm run dev

## Editing the SCSS
If changes has been made run the following command to update the SCSS  
npm run scss

## Scripts
All available scripts can be found in the package.json file.

## Data storage
Data storage is done using local storage. Therefore your browser contains all the data. <br />
For the local storage svelte Stores are used as an interface between local storage and UI code. <br />
For specifics see /src/lib/Store.ts.<br />
How to access these stores are examplified in "simple-analysis.svelte".
The store is first accessed using onmount and then looped through using a for loop to access the elements. 
The store must be initialized in the onMount function because local storage is only available on the client.

### migraine-diary

Start developing:
1. Clone repository (if you haven't already): "git clone https://github.com/leviate/migraine-diary.git".
2. Create a new local branch named after your selected user story: "git branch {name of your branch}".
3. Checkout the branch you just created: "git checkout {name of your branch}".
4. Do your work on this new branch.
5. When user story is implemented, commit the code to your branch.
6. Push the code to GitHub: "git push --set-upstream origin {name of your branch}".
7. Go to GitHub and create a pull request to the acceptance branch.
