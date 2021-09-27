import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { CreateNote } from "./components/CreateNote";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Notes } from "./components/Notes";


function App() {
  return (
    <div>
      <Router>
        <Navbar/>

          <Route path="/" exact>
             <Home/>
          </Route>

          <Route path="/notes">
             <Notes/>
          </Route>

          <Route path="/create">
             <CreateNote/>
          </Route>
      </Router>
    </div>
  );
}

export default App;
