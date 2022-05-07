import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
      <h1>Page Not Found</h1>
      <p>Well, this is dissappointing</p>
      <p>
          <Link to='/'>Go to homepage</Link>
      </p>
    </main>
  )
}

export default Missing
