const EventItem = (eventDic) => {
const Title = eventDic.title
const startTime = eventdic.startTime
const finishTime = eventdic.finishTime
const location = eventdic.location

  return (
    <>
      <div className="box">
      <h3>An Event! An Event {eventDic.title}</h3>
      </div>
    </>
  )
}

export default EventItem
