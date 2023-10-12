import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Title from "../../utils/Title";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Function to generate events for a given date
const generateEventsForDate = (date) => {
    const events = [];
  
    // Generate multiple events for the same date
    for (let i = 1; i <= 3; i++) {
      const event = {
        title: `Event ${i} on ${format(date, 'MM/dd/yyyy')}`,
        start: date,
        end: date,
      };
      events.push(event);
    }
  
    return events;
  };
  
  // Create an array to hold all events
  const myEventsList = [];
  
  // Generate events for multiple days (e.g., 11/10/2023 to 11/14/2023)
  const startDate = new Date(2023, 9, 10); // October is represented by 9 (zero-based index)
  const endDate = new Date(2023, 9, 14);
  
  for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
    const eventsForDay = generateEventsForDate(currentDate);
    myEventsList.push(...eventsForDay);
  }
  

const MyCalendar = () => (
  <div className="pl-[33px] pr-[90px] w-full">

    <Title>Calender</Title>

    <Calendar
      localizer={localizer}
        events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 650 }}
    />
  </div>
);

export default MyCalendar;