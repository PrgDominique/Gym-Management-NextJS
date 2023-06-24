'use client'

import { gql } from '@apollo/client'
import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { useEffect } from 'react'

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`

interface DogsProps {
  onDogSelected: (breed: string) => void
}

export default function Dogs({ onDogSelected }: DogsProps) {
  const { loading, error, data } = useQuery(GET_DOGS)

  useEffect(() => {
    if (data) {
      // Do something with the fetched data if needed
    }
  }, [data])

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <select name='dog' onChange={(e) => onDogSelected(e.target.value)}>
      {data.dogs.map((dog: { id: string; breed: string }) => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  )
}
