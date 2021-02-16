import React, { useEffect, useReducer, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import dummyJSON from '../dummy';
import { FormValue, InitialState } from '../helpers/Interfaces';
import { reducer } from '../helpers/Reducers';
import End from './End';
import Footer from './Footer';
import GenreList from './GenreList';
import Header from './Header';
import Information from './Information';
import NewSubgenre from './NewSubgenre';
import SubgenreList from './SubgenreList';

const App : React.FC = () =>{
  const dummy = {...dummyJSON};  
  
  const initialState :InitialState = {
    genres:[...dummy.genres],
    genState:null,
    genID: null,
    subID:null,
    newState:false,
    stage:"Genres"
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [submitValue, setSubmitValue] = useState<FormValue | null>(null);

  useEffect(() => {
    if(submitValue){
      console.log("FAKE SUBMIT",submitValue);
    }
  }, [submitValue]);
  
  console.log("11111111111111",state) 
  
  return (
    <div className="container">
      <Router> 
        <Switch>
          <Route exact path="/">
            <Header state={state}/>
            <GenreList genres={state.genres} dispatch={dispatch}/>
            <Footer selectedID={state.genID} state={state} dispatch={dispatch} />
          </Route>
          <Route path="/subgenres">
            <Header state={state}/>
            <SubgenreList genre={state.genState} dispatch={dispatch} />
            <Footer selectedID={state.subID} state={state} dispatch={dispatch} />
          </Route>
          <Route path="/new-subgenre">
            <Header state={state}/>
            <NewSubgenre state={state} dispatch={dispatch}/>
            <Footer selectedID={state.subID} state={state} dispatch={dispatch} />             
          </Route>
          <Route path="/information">
            <Header state={state}/>
            <Information setSubmitValue={setSubmitValue} stage={state.stage} selectedID={state.subID} addNewState={state.newState} dispatch={dispatch} />
            <Footer selectedID={state.subID} state={state} dispatch={dispatch} />
          </Route>
          <Route path="/submit">
            <End />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}



export default App;