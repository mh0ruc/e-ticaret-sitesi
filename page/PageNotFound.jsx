import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
    <h1> 404 not found</h1>
    <Link to='/' className='btn btn-info'> ana sayfaya dönmek için tıklayın</Link>
    </>
  )
}

export default PageNotFound