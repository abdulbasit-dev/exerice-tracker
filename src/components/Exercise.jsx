import React from 'react'
import {Link} from 'react-router-dom'

function Exercise({exercise, deleteExercie}) {
  const {username, description, duration, date, _id} = exercise

  return (
    <tr>
      <td>{username}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>{date.substring(0, 10)}</td>
      <td>
        <Link className='btn btn-secondary mr-2 btn-sm' to={`/edit/:${_id}`}>
          Edit
        </Link>{' '}
        |{' '}
        <button className='btn btn-outline-danger ml-2 btn-sm' onClick={() => deleteExercie(_id)}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Exercise
