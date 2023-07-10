import { gql } from '@apollo/client'
import { getClient } from '../lib/ApolloClient'

export const dynamic = 'force-dynamic'

const query = gql`
  query {
    username {
      id
      name
      age
    }
  }
`

interface Countries {
  username: { id: string; name: string; age: string }[]
}

export default async function ServerSide() {
  const data = await getClient().query<Countries>({ query })
  const username = data.data.username.slice(0, 1)
  console.log(data.data.username)

  return (
    <h1>
      {username.map((item, i) => (
        <div key={i}>
          <h1>name: {item.name}</h1>
          <h1>age: {item.age}</h1>
        </div>
      ))}
    </h1>
  )
}
