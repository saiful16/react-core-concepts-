import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Batsman from './Batsmans'
import Users from './Users'
import Friends from './Friends'

const userList = fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())

const friendsList = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json()
}

function App() {
  function handleClick() {
    alert("i am clicked")
  }
  const handleClick3 = () => {
    alert("btn - 3 is clicked")
  }
  const add5 = (number) => {
    return alert(number + 5)
  }
  const friends = friendsList();

  return (
    <>

      <h1>Vite + React</h1>
      <Suspense fallback={ <h3>Loading.......</h3> }>
        <Friends friends ={friends}></Friends>
      </Suspense>
      {/* <Suspense fallback={<h1>Loading ...</h1>}>
        <Users userList={userList}></Users>
      </Suspense> */}
      <Batsman></Batsman>
      <Counter></Counter>

      {/* we will not call the function here. if we call the function here. it will be clickd automatically */}
      {/* option -1  */}
      <button onClick={handleClick}>Click Me</button>
      {/* option - 2 */}
      <button onClick={function handleclick2() {
        alert("Btn 2 is clicked")
      }}> click me 2</button>
      {/* opton -3 arrow function mostly used this way*/}
      <button onClick={handleClick3} >Click me 3</button>
      {/* opton -4 arrow function  inline*/}
      <button onClick={() => alert("btn -4 clicked")} >Click me 4</button>
      {/* when need to pass parameter */}
      <button onClick={() => add5(50)}>Add 5</button>
    </>
  )
}

export default App
