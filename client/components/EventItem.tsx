import {Event} from '../../models/Event.ts'

const EventItem = (eventDic: Event) => {


  return (
<>
      <div className="box event-box">
        <div className="columns is-mobile is-multiline">
          <div className="column is-half">
            <p className="event-start-time">{eventDic.startTime}</p>
          </div>
          <div className="column is-half has-text-right">
            <h1 className="title is-4 event-title">{eventDic.title}</h1>
          </div>
          <div className="column is-half">
            <p className="event-end-time">{eventDic.finishTime}</p>
          </div>
          <div className="column is-half has-text-right">
            <p className="event-location">{eventDic.location}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventItem
