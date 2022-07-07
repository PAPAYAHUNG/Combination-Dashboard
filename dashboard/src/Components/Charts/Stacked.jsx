import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  AnnotationsDirective,
  AnnotationDirective,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  StackingColumnSeries,
  ChartAnnotation,
} from "@syncfusion/ej2-react-charts";

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/data/dummy.js";
function Stacked({ width, height }) {
  return (
    <ChartComponent 
    width={width} 
    height={height}
    id="charts"
    primaryXAxis={stackedPrimaryXAxis}
    primaryYAxis={stackedPrimaryYAxis}
    title="Stacked chart"
    chartArea={{border:{width:0}}}
    tooltip={{enable:true}}
    legendSettings={{background:'white'}}
    >
      <Inject
        services={[
          StackingColumnSeries,
          Legend,
          Tooltip,
          DataLabel,
          Category,
          ChartAnnotation,
        ]}
      />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index)=><SeriesDirective key={index}  {...item} ></SeriesDirective>
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default Stacked;
