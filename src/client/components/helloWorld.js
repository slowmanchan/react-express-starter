import React from 'react'

export function HelloWorld (props) {
  return (
    <div className='hello-world'>
      <p>Hello world!</p>
      <p> {props.exampleMessage} </p>
    </div>
  )
}


export default HelloWorld