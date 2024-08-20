import { useState } from 'react'
import { getGreeting } from '../apiClient.ts'
import { useQuery } from '@tanstack/react-query'
import EventItem from './EventItem.tsx'

const eventDic = {
  title: 'this is a title from a dictionary'
}

const Home = () => {
  const [count, setCount] = useState(0)

  const {
    data: greeting,
    isError,
    isPending,
  } = useQuery({ queryKey: ['greeting', count], queryFn: getGreeting })

  if (isPending) return <p>Loading...</p>

  return (
    <>
      {count}
      {EventItem(eventDic)}
      {EventItem(eventDic)}
      {EventItem(eventDic)}
      {EventItem(eventDic)}
      {EventItem(eventDic)}
      {EventItem(eventDic)}
      <div className="box">I'm in a box.</div>
      <h1 className="title is-1">{greeting}</h1>
      {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving the greeting.
        </p>
      )}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}

export default Home
