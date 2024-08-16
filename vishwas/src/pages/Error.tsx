import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page'>
    <div className='center'>
    <Link to='/'className='btn primary'>Go Back</Link>
      <h2>Page not found</h2>
      <h1>404</h1>
    </div>
    </section>
  )
}

export default Error