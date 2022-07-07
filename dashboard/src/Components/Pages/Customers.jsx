import React from 'react'
import { ColumnDirective, ColumnsDirective, Edit, Filter, GridComponent, Inject, Page, Search, Sort, Toolbar } from '@syncfusion/ej2-react-grids';
import { customersData,customersGrid } from '../../data/data/dummy';
import Header from '../SmallComponent/Header';
function Customers() {
  return (
    <div>
      <Header page="Page" title="Customers"/>
      <GridComponent 
      dataSource={customersData}
      toolbar={['Search','Delete']}
      allowPaging
      allowSorting
      searchSettings={{key:""}}
      editSettings={{allowDeleting:true,allowEditing:true}}
      width='auto'
       >
                  <ColumnsDirective>
                      {customersGrid.map((item,index)=>{
                        return (
                          <ColumnDirective key={index} {...item}></ColumnDirective>
                        )
                      } )}
                  </ColumnsDirective>
                  <Inject services={[Page,Search,Toolbar,Search,Edit,Sort,Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers