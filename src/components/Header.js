import React, { useState } from 'react'
import {Button ,Table ,Accordion, Card ,Nav ,Navbar ,Container ,NavDropdown } from 'react-bootstrap';

 const Header = ()=> {
     const [colour, setColour] =useState("Black")
     const [count,setCount] = useState(0)
      const changeColour =()=>{
        setColour("Red")
      }


    const increment =()=>{
      setCount(count+1)
    }

    const decrement =()=>{
      setCount(count-1)
    }

  return (
    <>
      <h1 className='bg-success text-white'>useState Hook in</h1>
     <h2>My Favourite color  {colour} </h2>
     <Button onClick={changeColour} >Change Colour</Button>
     <br />
     <br />

     <h1>Counter is {count }</h1>
     <Button onClick={increment} className='m-2 bg-success'>+</Button>
     <Button onClick={decrement} className='m-2 bg-danger'>-</Button>
    </>
  );
};
 
export default Header;
