import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import dummyJSON from '../dummy';
import { findSub } from '../helpers/Functions';
import { Genres } from '../helpers/Interfaces';
import Footer from './Footer';
import GenreList from './GenreList';
import Header from './Header';
import SubgenreList from './SubgenreList';

const App : React.FC = () =>{
  const dummy = {...dummyJSON};
  const {genres} = dummy;

  const [genreID, setGenreID] = useState<number | null>(null);
  const [genreState, setGenreState] = useState<Genres | null>(null);
  const [stage, setStage] = useState("Genres");

  useEffect(() => {
    if(genreID){
      const singleGen = findSub(genreID, genres);
      if(singleGen){
        setGenreState(singleGen);
      }
    }
  }, [genreID])
  

  console.log(genreState)
  return (
    <div className="container-fluid">
      <Router> 
        <Switch>
          <Route exact path="/">
            <Header />
            <GenreList genres={genres} setGenreID={setGenreID} />
            <Footer stage={stage} setStage={setStage} selectedID={genreID} />
          </Route>
          <Route path="/subgenres">
            <Header />
            <SubgenreList genre={genreState} />
            <Footer stage={stage} setStage={setStage} selectedID={genreID} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;