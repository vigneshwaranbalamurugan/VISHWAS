import React from 'react'
import { Link } from 'react-router-dom'
// import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'

const Error = () => {
  return (
    <section className='error-page'>
    <div className='center'>
    <Link to='/'className='btn primary'>Go Back</Link>
      <h2>Page not found</h2>
      <h1 style={{ fontSize: '10rem', margin: '0' }}>404</h1>
    </div>
    </section>
  )
}

export default Error