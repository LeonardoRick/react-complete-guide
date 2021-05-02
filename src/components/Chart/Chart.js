import './Chart.css'

import ChartBar from './ChartBar'
const Chart = props => {
  const { dataPoints, max } = props;

  return (
    <div className="chart">
      {dataPoints.map(dataPoint =>
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          max={max}
          label={dataPoint.label} />)}
    </div>
  )
}

export default Chart;
