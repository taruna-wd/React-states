import { useState } from 'react'

import './App.css'
import State from './State'
import Bell from './Bell'
import LikeButton from './LikeButton'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       
      <div>
        <h3> STATE IN REACT</h3>
        <State/>
        <h3> State like button</h3>

        <LikeButton/>
        <h3> State  bell</h3>

        <Bell/>

      </div>
    </>
  )
}

export default App
