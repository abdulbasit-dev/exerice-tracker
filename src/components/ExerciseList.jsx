import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Exercise from './Exercise'

function ExerciseList() {
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    axios
      .get('https://exercise-tracker99.herokuapp.com/exercises')
      .then(res => setExercises(res.data))
      .catch(err => console.log(err))
  }, [])

  function deleteExercie(id) {
    axios
      .delete(`https://exercise-tracker99.herokuapp.com/exercises/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

    setExercises(exercises.filter(item => item._id !== id))
  }

  return (
    <div className='container mt-5'>
      <h3>Logged Exercises</h3>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map(exercise => (
            <Exercise key={exercise._id} exercise={exercise} deleteExercie={deleteExercie} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExerciseList
