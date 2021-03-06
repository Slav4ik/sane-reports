import React, { PropTypes } from 'react';
import SectionBarChart from './SectionBarChart';
import SectionPieChart from './SectionPieChart';
import SectionLineChart from './SectionLineChart';
import { CHART_TYPES } from '../../../constants/Constants';

const SectionChart = ({ type, data, style, dimensions, legend, chartProperties = {}, legendStyle = {}, sortBy,
        referenceLineX, referenceLineY }) =>
  <div className="section-chart" style={style}>
    {
      (() => {
        let chartToRender;
        switch (type) {
          case CHART_TYPES.bar:
            chartToRender = (
              <SectionBarChart
                data={data}
                style={style}
                dimensions={dimensions}
                legend={legend}
                chartProperties={chartProperties}
                legendStyle={legendStyle}
                sortBy={sortBy}
              />
            );
            break;
          case CHART_TYPES.pie:
            chartToRender = (
              <SectionPieChart
                data={data}
                style={style}
                dimensions={dimensions}
                legend={legend}
                chartProperties={chartProperties}
                legendStyle={legendStyle}
                sortBy={sortBy}
              />
            );
            break;
          case CHART_TYPES.line:
            chartToRender = (
              <SectionLineChart
                data={data}
                style={style}
                dimensions={dimensions}
                legend={legend}
                chartProperties={chartProperties}
                legendStyle={legendStyle}
                sortBy={sortBy}
                referenceLineX={referenceLineX}
                referenceLineY={referenceLineY}
              />
            );
            break;
          default:
            // Ignored
        }
        return chartToRender;
      })()
    }
  </div>
;
SectionChart.propTypes = {
  type: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  style: PropTypes.object,
  dimensions: PropTypes.object,
  chartProperties: PropTypes.object,
  legend: PropTypes.array,
  legendStyle: PropTypes.object,
  sortBy: PropTypes.object,
  referenceLineX: PropTypes.object,
  referenceLineY: PropTypes.object
};

export default SectionChart;
