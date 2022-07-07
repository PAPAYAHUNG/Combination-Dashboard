import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import Header from "../SmallComponent/Header";
import { scheduleData } from "../../data/data/dummy";
function Calendar() {
  return (
    <div>
      <Header page="Page" title="Calendar" />
      <ScheduleComponent
      eventSettings={{dataSource:scheduleData}}
      selectedDate={new Date(2021,1,10)}
      height='650px'>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda,Resize,DragAndDrop]} />
      </ScheduleComponent>
      
    </div>
  );
}

export default Calendar;
