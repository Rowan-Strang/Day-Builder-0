import { useState } from 'react'
import { getGreeting } from '../apiClient.ts'
import { useQuery } from '@tanstack/react-query'
import EventItem from './EventItem.tsx'
import {Event} from '../../models/Event.ts'

const eventDic: Event[] = [{
  title: 'First Event',
  startTime: '10:00am',
  finishTime: '11:00am',
  location: '154a Hoon Hay Road, Mount Cook'
},{
  title: 'Second Event',
  startTime: '11:15am',
  finishTime: '11:45am',
  location: '4 Hanson Street, Hoon Hay'},
  {
    title: 'Third Event',
    startTime: '11:15am',
    finishTime: '11:45am',
    location: '4 Hanson Street, Hoon Hay'}]

const events = []
for(let i= 0;i<eventDic.length;i++){
events.push(EventItem(eventDic[i]))
  }
const Home = () => {
  // const [count, setCount] = useState(0)

  // const {
  //   data: greeting,
  //   isError,
  //   isPending,
  // } = useQuery({ queryKey: ['greeting', count], queryFn: getGreeting })

  // if (isPending) return <p>Loading...</p>

  return (
    <>
    <section className="section is-small">
      <div className="container">
  <h1 className="title">Welcome to Day Builder!</h1>
  <h2 className="subtitle">
    a fast and easy way to plan out a wedding day <strong>while accounting for driving time</strong>, then export it to your calendar
  </h2>
      {events}
      </div>
</section>
      {/* <button onClick={() => setCount(count + 1)}>Click</button> */}
    </>
  )
}

export default Home
