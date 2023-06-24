import { gql } from '@apollo/client'
import { getClient } from '../lib/ApolloClient'

export const dynamic = 'force-dynamic'

const query = gql`
  query {
    countries {
      code
      name
      emoji
    }
  }
`

interface Countries {
  country: { code: string; name: string; emoji: string }[]
}

export default async function ServerSide() {
  const data = await getClient().query<Countries>({ query })
  const countries = data.data.countries.slice(0, 5)
  console.log(countries)

  return (
    <h1>
      {countries.map((item, i) => (
        <div key={i}>
          <h1>{item.code}</h1>
          <h1>{item.name}</h1>
          <h1>{item.emoji}</h1>
        </div>
      ))}
    </h1>
  )
}
