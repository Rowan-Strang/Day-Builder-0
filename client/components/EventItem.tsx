import {Event} from '../../models/Event.ts'

const EventItem = (eventDic: Event) => {


//   return (
// <>
// <div>
//   {/* <button>this is a button</button> */}
// </div>
//       <div className="box event-box">
//         <div className="columns is-mobile is-multiline">
//           <div className="column is-half">
//             <p className="event-start-time">{eventDic.startTime}</p>
//           </div>
//           <div className="column is-half has-text-right">
//             <h1 className="title is-4 event-title">{eventDic.title}</h1>
//           </div>
//           <div className="column is-half">
//             <p className="event-end-time">{eventDic.finishTime}</p>
//           </div>
//           <div className="column is-half has-text-right">
//             <p className="event-location">{eventDic.location}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   )

return (
  <>
    <div className="box event-box">
      <div className="columns is-mobile is-multiline">
        <div className="column is-half">
          <button 
            className="button is-text event-start-time" 
            onClick={() => handleEdit('start time')}
          >
            {eventDic.startTime}
          </button>
        </div>
        <div className="column is-half has-text-right">
          <button 
            className="button is-text title is-4 event-title" 
            onClick={() => handleEdit('title')}
          >
            {eventDic.title}
          </button>
        </div>
        <div className="column is-half">
          <button 
            className="button is-text event-end-time" 
            onClick={() => handleEdit('end time')}
          >
            {eventDic.finishTime}
          </button>
        </div>
        <div className="column is-half has-text-right">
          <button 
            className="button is-text event-location" 
            onClick={() => handleEdit('location')}
          >
            {eventDic.location}
          </button>
        </div>
      </div>
    </div>
  </>
)
}



export default EventItem
