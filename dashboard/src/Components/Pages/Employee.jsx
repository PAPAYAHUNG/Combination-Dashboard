import React from 'react'
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Search, Toolbar } from '@syncfusion/ej2-react-grids';
import { employeesData,employeesGrid } from '../../data/data/dummy';
import Header from '../SmallComponent/Header';
function Employee() {
  return (
    <div className='p-3'>
      <Header page="Page" title="Employees"/>
      <GridComponent 
      dataSource={employeesData}
      toolbar={['Search']}
      allowPaging
      allowSorting
      searchSettings={{key:""}}
      width='auto'
       >
                  <ColumnsDirective>
                      {employeesGrid.map((item,index)=>{
                        return (
                          <ColumnDirective key={index} {...item}></ColumnDirective>
                        )
                      } )}
                  </ColumnsDirective>
                  <Inject services={[Page,Search,Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employee