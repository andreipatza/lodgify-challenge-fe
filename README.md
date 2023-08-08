https://github.com/andreipatza/lodgify-challenge-fe/assets/57939307/0fd19720-eb07-4326-81d3-641ddb897b32

# Lodgify - FE Technical Challenge

This project represents a widget that shows the current progress of the profile creation of the user.

The user is able to see the missing tasks of a specific area and be able to mark them as done.

## Installation

In order to be able to start the project, first you need to install the dependencies using the following command:

### `yarn install`

After all dependencies are installed you can run the app using command:

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Technical specifications

For this project I've used React with TypeScript.

The chosed styling method was styled-components.

I've created custom made ATOM components ( only modal is used from MUI )

All components are functional and they have their own purpose.

Components are reusable.

The data for displaying the accordions and tasks are recived from the following API:

### `https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress`

## Further implementations

If we want to not keep it simple, we could add a redux state management for storing the state or the accordions, we could create some actions for every change within the redux state and also for modal state ( we could create a modal globally and use it for multiple purposes, and display it using dispatch method ).

Also, we can use axios instead of the basic fetch.

This project has only the purpose to show my skills in a fast way.

The total time spent working for this project was 3 - 3.5h.

### Thank you for your time!
