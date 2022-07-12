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
  LineSeries,
  DateTime,
} from "@syncfusion/ej2-react-charts";

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/data/dummy.js";
import Header from "../SmallComponent/Header.jsx";
import { useStateContext } from "../../context/ContextProvider.jsx";
function Line2({ width, height }) {
  const {currentMode} = useStateContext()
  return (
    <div className="p-10">
      <Header page="Page" title="Inflation chart" />
      <ChartComponent
        width={width}
        height={height}
        id="charts"
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        // title="Inflation chart"
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        // legendSettings={{ background: "white" }}
        background={currentMode==="dark" ? " #33373E" :" #fff"}
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item}></SeriesDirective>
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}

export default Line2;
