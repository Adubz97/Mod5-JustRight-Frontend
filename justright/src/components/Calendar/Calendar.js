import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import "./Calendar.css"

class Calendar extends React.Component {


  // componentDidMount() {
  //   var calendarEl = document.getElementById('calendar');
  //   var calendar = new Calendar(calendarEl, {
  //     height: 650,
  //   });
  // }
  render() {
    return (
      <div style={{ backgroundColor: "#e5e5e5", height: "812px" }}>
        <div
          style={{
            position: "absolute",
            left: "1130px",
            top: "85px",
            fontSize: "35px",
            color: "black",
          }}
        >
          Calendar{" "}
        </div>
        <br />
        <br />
        <br />
        <div class="calendar">
          <FullCalendar
            contentHeight="675px"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "today,prev,next",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,list",
            }}
            initialView="dayGridMonth"
          />
        </div>
      </div>
    );
  }
}
export default Calendar;
