import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import EventItem from './EventItem.tsx'
import {Event} from '../../models/Event.ts'

const initialEvents: Event[] = [
  {
    title: 'First Event',
    startTime: '10:00am',
    finishTime: '11:00am',
    location: '154a Hoon Hay Road, Mount Cook',
  },
  {
    title: 'Second Event',
    startTime: '11:15am',
    finishTime: '11:45am',
    location: '4 Hanson Street, Hoon Hay',
  },
  {
    title: 'Third Event',
    startTime: '11:15am',
    finishTime: '11:45am',
    location: '4 Hanson Street, Hoon Hay',
  },
];

const Home = () => {


  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState<Event>({
    title: '',
    startTime: '',
    finishTime: '',
    location: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setNewEvent({
      title: '',
      startTime: '',
      finishTime: '',
      location: '',
    });
    setShowForm(false);
  };


  return (
    <section className="section is-small">
      <div className="container">
        <h1 className="title">Welcome to Day Builder!</h1>
        <h2 className="subtitle">
          A fast and easy way to plan out a wedding day{' '}
          <strong>while accounting for driving time</strong>, then export it to your calendar.
        </h2>
        {events.map((event, index) => (
          <EventItem key={index} {...event} />
        ))}

        <button className="button is-primary" onClick={() => setShowForm(true)}>
          Add New Event
        </button>

        {showForm && (
          <form onSubmit={handleAddEvent} className="box mt-4">
            <div className="field">
              <label className="label">Event Title</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="title"
                  value={newEvent.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Location</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="location"
                  value={newEvent.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Start Time</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="startTime"
                  value={newEvent.startTime}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Finish Time</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="finishTime"
                  value={newEvent.finishTime}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="control">
              <button className="button is-link" type="submit">
                Add Event
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Home;



{/* <button onClick={() => setCount(count + 1)}>Click</button> */}

// import { getGreeting } from '../apiClient.ts'

  // const [count, setCount] = useState(0)
  // const {
  //   data: greeting,
  //   isError,
  //   isPending,
  // } = useQuery({ queryKey: ['greeting', count], queryFn: getGreeting })

  // if (isPending) return <p>Loading...</p>

//   const events = []
// for(let i= 0;i<eventDic.length;i++){
// events.push(EventItem(eventDic[i]))
//   }


// const eventrDic: Event[] = [{
//   title: 'First Event',
//   startTime: '10:00am',
//   finishTime: '11:00am',
//   location: '154a Hoon Hay Road, Mount Cook'
// },{
//   title: 'Second Event',
//   startTime: '11:15am',
//   finishTime: '11:45am',
//   location: '4 Hanson Street, Hoon Hay'},
//   {
//     title: 'Third Event',
//     startTime: '11:15am',
//     finishTime: '11:45am',
//     location: '4 Hanson Street, Hoon Hay'}]

// const events = []
// for(let i= 0;i<eventDic.length;i++){
// events.push(EventItem(eventDic[i]))
//   }