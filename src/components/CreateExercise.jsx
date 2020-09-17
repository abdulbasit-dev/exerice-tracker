import React, {useState, useEffect} from 'react'
import DatePicker from 'react-date-picker'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

function CreateExercise() {
  const [username, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState(0)
  const [date, setDate] = useState(new Date())
  const [users, setUsers] = useState([])

  const history = useHistory()

  useEffect(() => {
    axios.get('http://localhost:5000/users').then(res => {
      const users = res.data.map(user => user.username)
      setUsers(users)
      setUsername(users[0])
    })

    setUsers(['ahmad', 'sara'])
    setUsername('ahmed')
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const exercise = {username, description, duration, date}
    axios.post('http://localhost:5000/exercises ', exercise).then(res => console.log(res.data))
    console.log(exercise)
    window.location = '/'
  }

  return (
    <div className='container mt-5'>
      <h3 className='mb-3'>Create New Exercise Log</h3>
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

export default CreateExercise
