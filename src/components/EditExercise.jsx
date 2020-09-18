import React, {useState, useEffect} from 'react'
import DatePicker from 'react-date-picker'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function EditExercise() {
  const [username, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState(0)
  const [date, setDate] = useState(new Date())

  const [users, setUsers] = useState([])
  const {id} = useParams()

  useEffect(() => {
    axios.get(`https://exercise-tracker99.herokuapp.com/exercises/${id}`).then(res => {
      setUsername(res.data.username)
      setDescription(res.data.description)
      setDuration(res.data.duration)
      setDate(new Date(res.data.date))
    })

    axios.get('https://exercise-tracker99.herokuapp.com/users').then(res => {
      const users = res.data.map(user => user.username)
      setUsers(users)
    })
  }, [id])

  function handleSubmit(e) {
    e.preventDefault()
    const exercise = {username, description, duration, date}
    axios
      .post(`https://exercise-tracker99.herokuapp.com/exercises/update/${id}`, exercise)
      .then(res => console.log(res.data))
    console.log(exercise)
    window.location = '/'
  }

  return (
    <div className='container mt-5'>
      <h3 className='mb-3'>Edit Exercise</h3>
      <form action='' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>Username:</label>
          <select
            name=''
            id=''
            required
            className='form-control'
            value={username}
            onChange={e => setUsername(e.target.value)}
          >
            {users.map(user => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='description'>Description:</label>
          <input
            type='text'
            id='description'
            className='form-control'
            required
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='duration'>Duration (in minutes):</label>
          <input
            type='num'
            id='duration'
            className='form-control'
            required
            value={duration}
            onChange={e => setDuration(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='date'>Date:</label>
          <div>
            <DatePicker value={date} onChange={setDate} />
          </div>
        </div>

        <div className='form-group'>
          <button type='submit' className='btn btn-primary'>
            Create Exercise Log
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditExercise
