
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/bottles/Bottles'


function App() {

  const bottlePromise = fetch('./bottles.json').then(res => res.json())

  return (
    <>    
      <h1>Buy Awesome Water Bottle</h1>
      <Suspense fallback={ <h3>Bottles are Loading</h3>}>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
