import { DotsVerticalIcon } from '@heroicons/react/outline'
import React, { MouseEvent, useRef } from 'react'
import { IPortfolio, PortfolioState } from '@/types'
import type { InteractionItem } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { RangeFilter } from '@enums/rangeFilter.enum'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
} from 'chart.js';

import {
  Chart,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

/**
 * filter out balance data based on time range
 * @param {Date} start 
 * @param {Date} end 
 * @param {RangeFilter} scale 
 */
function getData(start: Date, end: Date, scale: RangeFilter): void {

}


export function PortfolioCard({ balance, currency }: IPortfolio) {
  const [portfolio, setPortfolio] = React.useState<PortfolioState>({} as PortfolioState);

  const options = {
    responsive: true
  };

  const labels = "hello world".split("");

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [23, 45, 1, 543, 54, 87, 23, 2, 7, , 887, 54, 5],
        borderColor: '#25CCF7',
        backgroundColor: '#FFF',
      },
    ],
  };

  const printDatasetAtEvent = (dataset: InteractionItem[]) => {
    if (!dataset.length) return;
    const datasetIndex = dataset[0].datasetIndex;
    console.log(data.datasets[datasetIndex].label);
  };

  const printElementAtEvent = (element: InteractionItem[]) => {
    if (!element.length) return;
    const { datasetIndex, index } = element[0];
    console.log(data.datasets[datasetIndex].data[index]);
  };

  const chartRef = useRef<ChartJS>(null);

  const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }

    // printDatasetAtEvent(getDatasetAtEvent(chart, event));
    printElementAtEvent(getElementsAtEvent(chart, event));
  };

  return (
    <article className="bg-blue-200 rounded-xl p-5 h-[300px]">
      <DotsVerticalIcon className="h-5 text-gray-400 float-right" />
      <div className="overflow-hidden">
        <Line
          options={options}
          data={data}
          onClick={onClick}
        />
      </div>
    </article>
  )
}

export default PortfolioCard
