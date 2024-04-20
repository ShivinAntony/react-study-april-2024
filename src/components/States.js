import React from 'react'

const State = ({name,language,population}) => {
  return (
    <div className='bg-warning'>
      <h1 >{name}</h1>
      <h4>Language: {language}</h4>
      <h4>Population: {population}</h4>
    </div>
  )
}

export default State
