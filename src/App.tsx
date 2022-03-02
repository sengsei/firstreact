import React from 'react';
import './App.css';
import Gallery from "./Components/Gallery"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CharacterDetail from "./Components/CharacterDetail";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={'gallery'} element={<Gallery/>}/>
              <Route path={'gallery/:characterId'} element={<CharacterDetail/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
