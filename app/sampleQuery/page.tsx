'use client'

import { gql } from '@apollo/client'
import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr'

const GET_DOGS = gql`
  query {
    username {
      id
      name
      age
    }
  }
`

interface DogsProps {
  onDogSelected: (breed: string) => void
}

export default function Dogs({ onDogSelected }: DogsProps) {
  const { loading, error, data } = useQuery(GET_DOGS)


  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <h1>
    {data.username.map((item, i) => (
      <div key={i}>
        <h1>name: {item.name}</h1>
        <h1>age: {item.age}</h1>
      </div>
    ))}
  </h1>
  )
}
