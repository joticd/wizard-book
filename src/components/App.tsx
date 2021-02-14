import React, { useReducer } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import dummyJSON from '../dummy';
import { InitialState } from '../helpers/Interfaces';
import { reducer } from '../helpers/Reducers';
import Footer from './Footer';
import GenreList from './GenreList';
import Header from './Header';
import SubgenreList from './SubgenreList';

const App : React.FC = () =>{
  const dummy = {...dummyJSON};
  const {genres} = dummy;
  
  const initialState :InitialState = {
    genres:[...dummy.genres],
    genState:null,
    genID: null,
    subID:null,
    newState:false,
    stage:"Genres"
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("11111111111111",state) 
  
  return (
    <div className="container-fluid">
      <Router> 
        <Switch>
          <Route exact path="/">
            <Header />
            <GenreList genres={state.genres} dispatch={dispatch}/>
            <Footer stage={state.stage} selectedID={state.genID} addNewState={state.newState} state={state} dispatch={dispatch} />
          </Route>
          <Route path="/subgenres">
            <Header />
            <SubgenreList genre={state.genState} dispatch={dispatch} />
            <Footer stage={state.stage} selectedID={state.subID} addNewState={state.newState} state={state} dispatch={dispatch} />
          </Route>
          {/* <Route path="/new-subgenre">
            <Header />
            <NewSubgenre />
            <Footer stage={stage} selectedID={subgenreID} addNewState={addNewState} />             
          </Route>
          <Route path="/information">
            <Header />
            <SubgenreList genre={genreState} setSubgenreID={setSubgenreID} />
            <Footer stage={stage} selectedID={subgenreID} /> 
          </Route> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App;