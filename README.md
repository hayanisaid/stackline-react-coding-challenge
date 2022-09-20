# Simple React Redux App

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Takeaways

- 📌 Using Redux for such a small app was unnecessary; I would only use Redux if I needed to manage a complex state.

- 📌 I applied components decomposition patterns, and abstracting UI from the logic to create maintainable and scalable code.

- 📌 To retrieve the JSON file, I created a simple service that uses the [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch) API. If I were to create an app that required calling various Endpoints, I would make the API service more effecient and reusable to handle various HTTP calls [POST, GET, PUT, DELETE].

- 📌 For advanced data fetching and caching, using [RTK](https://redux-toolkit.js.org/rtk-query/overview) in this app would be a good choice to cache API requests. if we were to consume a GraphQL API,[Apollo-graphql](https://www.apollographql.com/) would be a good decision. 


