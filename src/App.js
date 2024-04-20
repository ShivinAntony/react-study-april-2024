import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import States from './components/States'
import { Container } from "react-bootstrap"

function App() {
  return (
    <>
      <div className='App'>
        <Container >
          <States name={"TamilNadu"} language={'Malayalam'} population={1000} />
          <States name={"Mumbai"} language={'Hindi'}  population={4000}/>
          <States name={"Delhi"} language={'Hindi'} population={3000}/>
          <States name={"Assam"} language={'Tamil'} population={6000}/>
        </Container>
      </div>
    </>
  );
}

export default App;
