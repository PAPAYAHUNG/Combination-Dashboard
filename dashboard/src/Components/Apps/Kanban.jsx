import React from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { kanbanGrid, kanbanData } from "../../data/data/dummy";
import Header from "../SmallComponent/Header";
function Kanban() {
  return (
    <div className="">
      <Header title='Kanban' page='Page'/>
      <KanbanComponent
      id="kanban"
      keyField="Status"
      dataSource={kanbanData}
      cardSettings={{ contentField: "Summary", headerField: "Id" }}
    >
      <ColumnsDirective>
        {kanbanGrid.map((item, index) => {
          return <ColumnDirective key={index} {...item} />;
        })}
      </ColumnsDirective>
    </KanbanComponent>
    </div>
  );
}

export default Kanban;
