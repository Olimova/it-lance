import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Possibilities from './components/possibilities/Possibilities'
import Question from './components/questions/Question'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Possibilities/>
      <Question/>
    </div>
  )
}

export default App