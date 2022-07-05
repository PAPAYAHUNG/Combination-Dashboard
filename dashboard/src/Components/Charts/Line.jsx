import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
// function Line() {
function Line({ height, width, id, type, color, data, currentColor }) {
  // return (
  //   <SparklineComponent
  //   id={id}
  //   height={height}
  //   width={width}
  //   LineWidth={1}
  //   valueType='Numeric'
  //   type={type}
  //   fill={color}
  //   border={{color:currentColor, width:2}}
  //   dataSource={data}
  //   xName="X"
  //   yName='Y'
  //    >
  //       <Inject services={[SparklineTooltip]}/>
  //   </SparklineComponent>
  // )
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      tooltipSettings={{
        visible: true,
        format: "${xval} : ${yval}",
      }}
      border={{color:'red', width:15}}
      dataSource={data}
      xName="xval"
      yName="yval"
      type="Line"
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
}

export default Line;
