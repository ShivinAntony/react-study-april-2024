import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import States from './components/States'
import { Container } from "react-bootstrap"

function App() {
  const states = [
    {name:'Kerala' , language :'Malayalam' , population:'1000'},
    {name:'TamilNadu' , language :'Tamil' , population:'4000'},
    {name:'Mumbai' , language :'Hindi' , population:'3000'},
    {name:'Assam' , language :'Malayalam' , population:'7000'},
    {name:'Mahaarash' , language :'Mala' , population:'9000'},
    {name:'Punea' , language :'Layalam' , population:'8000'},
  ]
  return (
    <>
      <div className='App'>
        <Container >
         <States states ={states} />
        </Container>
      </div>
    </>
  );
}

export default App;
