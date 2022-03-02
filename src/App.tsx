import React from 'react';
import './App.css';
import Gallery from "./Components/Gallery"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CharacterDetail from "./Components/CharacterDetail";
import Header from "./Components/Header";

function App() {
  return (
      <div>
          <Header/>
      <BrowserRouter>
          <Routes>
              <Route path={'gallery'} element={<Gallery/>}/>
              <Route path={'gallery/:characterId'} element={<CharacterDetail/>}/>
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
