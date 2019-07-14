# React + Apollo 
+ Hacker News Clone: 
    + Display a list of links
    + Search the list of links
    + Users can authenticate
    + authenticated users can create new links
    + Authenticated users can upvote links (one vote per link and user)
    + Realtime updates when other users upvote a link or create a new one
+ Frontend:
    + React: Frontend framework for building user interfaces
    + Apollo Client 2.1: Production-ready, caching GraphQL client
+ Backend:
    + graphql-yoga: Fully-featured GraphQL Server with focus on easy setup, performance & great developer experience
    + Prisma: Open-source GraphQL API layer that turns your database into a GraphQL AP   I
+ Why are there two GraphQL API layers in a backend architecture with Prisma?
    + Prisma provides the database layer which offers CRUD operations. The second layer is the application layer for business logic and common workflows (like authentication).
## Apollo
+ APOLLO ABSTRACTS AWAY ALL THE LOWER LEVEL NETWORKING LOGIC 
+ Just let the Apollo Client know the end point pf your GraphQL API (i.e. localhost:4000) in an httpcreatelink in your index.js and you can make simple queries and mutations thn you instantiate ApolloClient by passing in the httpLink and a new instance of an InMemoryCache.
+ Finally you render the root component of your React app. The App is wrapped with the higher-order component ApolloProvider that gets passed the client as a prop.
+ Apollo Client also has a cool caching functionality that makes it easier to precisely determine when you want data updated on the website using [Apollo caching data](https://www.apollographql.com/docs/react/advanced/caching.html#after-mutations)
+ You can update your store as data is updating so you can display it to clients rigth away


### GraphQL API
+ Before we start the server, let’s quickly understand the main components:

    + *prisma:* This directory holds all the files that relate to your Prisma setup. The Prisma client is used to access the database in your GraphQL resolvers (similar to an ORM).
        + *prisma.yml* is the root configuration file for your Prisma project.
        + *datamodel.prisma* defines your data model in the GraphQL Schema Definition Language (SDL). When using Prisma, the datamodel is used to describe the database schema.

    + *src: *This directory holds the source files for your GraphQL server.
        + *schema.graphql* contains your application schema. The application schema defines the GraphQL operations you can send from the frontend. We’ll take a closer look at this file in just a bit.
        + *generated/prisma-client* contains the auto-generated Prisma client, a type-safe database access library (similar to an ORM).
        + *resolvers *contains the resolver functions for the operations defined in the application schema.
        + *index.js* is the entry point for your GraphQL server.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

