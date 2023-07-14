'use client'
import { gql } from '@apollo/client'
// import { getClient } from '../lib/ApolloClient'
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'
// export const dynamic = 'force-dynamic

const query = gql`
  query {
    users {
      name
      password
    }
  }
`

interface User {
  users: { name: string; password: string }[]
}

export default function ServerSide() {
  // const data = await getClient().query<Countries>({ query })
  const { data } = useSuspenseQuery<User>(query)
  // const username = data.data.username.slice(0, 1)
  const username = data.users
  console.log(data.users)

  return (
    <h1>
      {username.map((item, i) => (
        <div key={i}>
          <h1>name: {item.name}</h1>
          <h1>password: {item.password}</h1>
        </div>
      ))}
    </h1>
  )
}
