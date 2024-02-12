import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const FindSimilarDogChart = (props: {
  labels: string[]
  chartData: number[]
}) => {
  const { labels, chartData } = props
  const maxProbability = Math.max(...chartData)
  const backgroundColors = chartData.map(probability =>
    probability === maxProbability
      ? 'rgba(255, 146, 50, 0.8)'
      : 'rgba(241, 242, 246, 0.8)',
  )

  const data = {
    labels,
    datasets: [
      {
        label: '예측 결과',
        data: chartData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: backgroundColors,
        barThickness: 40,
        borderRadius: 10,
      },
    ],
  }

  const options = {
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return <Bar data={data} options={options} />
}

export default FindSimilarDogChart
