'use client'

import { gql, useMutation } from '@apollo/client'
import { ChangeEvent, FormEvent, useState } from 'react'

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
        id
        name
        password
      }
    }
  `

  const [SignupMutation, { data, loading, error }] = useMutation<
    SignupData,
    SignupVariables
  >(signUp)
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')

  if (error) return `Submission error ${error.message}`
  if (loading) return <h1>Loading ...</h1>

  // console.log(data)
  // console.log(loading)
  // console.log(error)

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault() // Prevent the default form submission
    SignupMutation({
      variables: {
        name: userName,
        password: password,
      },
    })
  }

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  return (
    <div className='h-100 my-40'>
      <div className='flex justify-center '>
        <h1 className=''>Register</h1>
        <div className='grid grid-cols-2 w-60 h-28 my-16'>
          <form onSubmit={handleSignUp}>
            <div>Username: </div>
            <input
              className='border-2 rounded-md border-slate-800 h-8 w-48'
              value={userName}
              onChange={handleUsernameChange}
            />
            <div>Password: </div>
            <input
              className='border-2 rounded-md border-slate-800 h-8 w-48'
              type='password'
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              className='rounded-l-lg bg-sky-400 grid-cols-2'
              onClick={handleSignUp}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
