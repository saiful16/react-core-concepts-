import './App.css'
import Food from './Food'
import ToDo from './Todo'
import Actor from './Actor';
import Singer from './Singer';
import Library from './Library';

function App() {
  const time = 50;
  const actors = ["Hena", "Bapparaj", "Omar Sunny"]
  const singers = [
    {id: 1, name : "Taylor", age: 33},
    {id: 2, name : "Jackson", age: 39},
    {id: 3, name : "Shunno", age: 33}
  ]
  const books = [
    {id: 1, name : "physics", price: 330},
    {id: 2, name : "math", price: 390},
    {id: 3, name : "chemistry", price: 303}
  ]

  return (
    <>



      <h1>React Core Component</h1>
      <Library books={books}></Library>
      {
        actors.map(actor => <Actor key={actor} actor={actor}></Actor>)
      }
      {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }
      {/* <Food food="apple"></Food>
      <Food food="orange"></Food>
      <Food food="apple" time={time}></Food>
      <Food food="apple"></Food>
      <ToDo task="landing page"></ToDo>
      <ToDo task="learning React" time={time} isDone={true}></ToDo>
      <ToDo task="Node.js"  isDone={true}></ToDo> */}
      {/* <Student></Student>
      <Person></Person>
      <Developer name="Jhon" tech="Java"></Developer>
      <Developer name="Linkon" tech="Python"></Developer>
      <Developer name="Bob" tech="JavaScript"></Developer>
      <Player name="Shakib" runs="8000"></Player>
      <Player name="Mushi" runs="7000"></Player> */}
    </>
  )
}

function Player({ name, runs }) {
  return (
    <div className='student'>
      <h1>Player Name : {name}</h1>
      <p>Runs : {runs} </p>
    </div>
  )
}

function MyFirstReactFunction() {
  return (
    <p>My first react function </p>
  )
}
function MySecondReactFunction() {
  const name = "Saiful"
  const age = 20
  return (
    <div>
      <h1>My name is {name}</h1>
      <p>age : {age}</p>
    </div>
  )
}
function Student() {
  return (
    <div className='student'>
      <p>Student Name : Hero</p>
    </div>
  )
}
function Person() {
  const name = "Programming Hero"
  const city = "Dhaka"
  const personStyle = {
    color: 'red',
    fontSize: "3rem"
  }
  return (
    <div style={personStyle}>
      <p>Person Name {name} </p>
      <p>Person Location {city}</p>
    </div>
  )
}

function Developer(props) {
  return (
    <div style={{
      border: '2px solid green',
      color: 'blue'
    }}>
      <p>Developer : {props.name}</p>
      <p>Technology : {props.tech} </p>
    </div>
  )
}

export default App
