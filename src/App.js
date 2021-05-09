import React from "react";
import { Route} from "react-router-dom";
import Layout from "./Layout";

/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */

function App() {
  return (
    <div className="app-routes">
      
        <Route path="/">
          <Layout />
        </Route>
       
    </div>
  );
}

export default App;
