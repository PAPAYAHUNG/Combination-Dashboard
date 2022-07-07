import React from 'react'
import { ColumnDirective, ColumnMenu, ColumnsDirective, ContextMenu, Edit, ExcelExport, Filter, GridComponent, Inject, Page, PdfExport, Resize, Sort } from '@syncfusion/ej2-react-grids';
import { ordersGrid,ordersData } from '../../data/data/dummy';
import Header from '../SmallComponent/Header';
function Order() {
  return (
    <div>
      <Header page="Page" title="Orders"/>
      <GridComponent 
      dataSource={ordersData}
      id="gridcomp"
      allowPaging
      allowSorting
       >
                  <ColumnsDirective>
                      {ordersGrid.map((item,index)=>{
                        return (
                          <ColumnDirective key={index} {...item}></ColumnDirective>
                        )
                      } )}
                  </ColumnsDirective>
                  <Inject services={[Resize,Sort,ContextMenu, Filter, Page, ExcelExport,Edit, PdfExport]}/>
      </GridComponent>
    </div>
  )
}

export default Order