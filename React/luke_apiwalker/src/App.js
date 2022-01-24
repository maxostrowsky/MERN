import React from 'react';
import { BrowserRouter, Route, Switch, useHistory} from "react-router-dom";
import People from "./components/people";
import Planets from "./components/planets";
import Error from "./components/error";
import Form from "./components/form";
import './App.css';

function App() {
  const history = useHistory()
  return (
    <BrowserRouter>
      {/*{JSON.stringify(reponseData)} */}
      <Form history={history}/>
      <Switch>

        <Route exact path="/people/:id">
          <People history={history}/>
        </Route>

        <Route exact path="/planets/:id">
          <Planets history={history}/>
        </Route>

        <Route exact path="/:error">
          <Error/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
