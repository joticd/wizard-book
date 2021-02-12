import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import dummyJSON from '../dummy';
import Footer from './Footer';
import GenresCom from './Genres';
import Header from './Header';

const App : React.FC = () =>{

  const [genreID, setGenreID] = useState<number | null>(null);
  const [stage, setStage] = useState("Genres");

  const dummy = {...dummyJSON};
  const {genres} = dummy;

  return (
    <div className="container-fluid">
      
      <Router> 
        <Switch>
          <Route exact path="/">
            <Header />
            <GenresCom genres={genres} setGenreID={setGenreID} />
            <Footer stage={stage} setStage={setStage} selectedID={genreID} />
          </Route>
          <Route path="/subgenres">
            <Header />
            <GenresCom genres={genres} setGenreID={setGenreID} />
            <Footer stage={stage} setStage={setStage} selectedID={genreID} />
          </Route>
        </Switch>
    </Router>

    </div>
  )
}

export default App;