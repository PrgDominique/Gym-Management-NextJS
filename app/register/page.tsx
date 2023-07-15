'use client'

import { gql, useMutation } from '@apollo/client'
import { ChangeEvent, FormEvent, useState } from 'react'
import { TextField } from '../components/ui/textfield'
import { Button } from '../components/ui/button'

interface User {
  id: string
  name: string
  password: string
}

interface SignupData {
  Signup: User
}

interface SignupVariables {
  name: string
  password: string
}

export default function Register() {
  const signUp = gql`
    mutation Mutation($name: String!, $password: String!) {
      Signup(name: $name, password: $password) {
        name
        password
      }
    }
  `

  const [SignupMutation, { loading, error }] = useMutation<
    SignupData,
    SignupVariables
  >(signUp)
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')

  if (error) return `Submission error ${error.message}`
  if (loading) return <h1>Loading ...</h1>

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault() // Prevent the default form submission
    SignupMutation({
      variables: {
        name: userName,
        password: password,
      },
    })
  }

  return (
    <div className='h-100 my-40'>
      <div className='flex justify-center '>
        <h1 className=''>Register</h1>
        <div className='grid grid-cols-2 w-60 h-28 my-16'>
          <form onSubmit={handleSignUp}>
            <TextField
              name='Username'
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              name='Password'
              onChange={(e) => setPassword(e.target.value)}
              type='password'
            />

            <Button name='Sign up' type='submit' />
          </form>
        </div>
      </div>
    </div>
  )
}
