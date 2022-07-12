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
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/data/dummy.js";
import Header from "../SmallComponent/Header.jsx";
import { useStateContext } from "../../context/ContextProvider.jsx";
function Area({ width, height }) {
  const {currentMode} = useStateContext()
  return (
    <div className="p-10">
      <Header page="Area" title="Inflation Rate Percentage" />
      <ChartComponent
        width={width}
        height={height}
        id="charts"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        // title="Inflation chart"
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        // legendSettings={{ background: "white" }}
        background={currentMode==="dark" ? " #33373E" :" #fff"}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item}></SeriesDirective>
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}

export default Area;
