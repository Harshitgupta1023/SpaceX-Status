import React from "react";
import "./App.css";
import logo from "./spacex.jpg";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",

  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="Spacex"
            style={{ display: "block", width: 300, margin: "auto" }}
          ></img>
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:id" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
