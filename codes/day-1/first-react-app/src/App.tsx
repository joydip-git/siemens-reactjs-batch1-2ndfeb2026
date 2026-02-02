import { useState } from 'react'
import './App.css'
//import { createElement, Fragment } from "react";

function App() {
  // const arr = useState<string>('Welcome to React JS')
  // const data = arr[0]
  // const updateData = arr[1]

  const [data, updateData] = useState<string>('Welcome to React JS')

  //const num = [11, 21, 31, 40]
  //const [, num2, , num4] = num
  // const spanElement = createElement('span', {}, 'Welcome to React JS')
  // const div = createElement('div',{id:'main'},[spanElement])
  // return div
  const style = { backgroundColor: 'yellow', color: 'blue' }
  //let data = 'Welcome to React JS'
  const divClickHandler = (newText: string) => {
    console.log(data);
    //data = newText
    updateData(newText)
    console.log(data);
  }
  return (
    <>
      <div id='main' style={style} onClick={
        (e) => divClickHandler('Welcome to React JS Component State')
      }>
        <span>
          {
            data
          }
        </span>
      </div>
      <p>
        asgjash
      </p>
    </>
  )
}


// function Frag(props) {
//   return props.children
// }
// import { Component, type ReactNode } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props)
//      this.state={ data:''}
//   }
//   render(): ReactNode {
//     return <div>Welcome to React JS</div>
//   }
// }

export default App