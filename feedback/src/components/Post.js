import React from 'react'
import Card from './shared/Card'
import {useParams} from 'react-router-dom'

function Post() {

  const params = useParams();
  return (
    <Card>
      <h1>Post section</h1>
      <p>name : {params.name} id:{params.id}</p>
    </Card>
  )
}

export default Post