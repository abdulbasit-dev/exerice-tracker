import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ExerciseList from './components/ExerciseList'
import EditExercise from './components/EditExercise'
import CreateUser from './components/CreateUser'
import CreateExercise from './components/CreateExercise'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Switch className=''>
          <Route path='/create'>
            <CreateExercise />
          </Route>
          <Route path='/user'>
            <CreateUser />
          </Route>
          <Route path='/edit/:id'>
            <EditExercise />
          </Route>
          <Route exact path='/'>
            <ExerciseList />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
