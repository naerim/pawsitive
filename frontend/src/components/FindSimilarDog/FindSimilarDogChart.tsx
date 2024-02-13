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
        cutcout: '90%',
        images: [
          '/img/img_maltese.png',
          '/img/img_bichon.png',
          '/img/img_chihuahua.png',
          '/img/img_poodle.png',
          '/img/img_retriever.png',
        ],
      },
    ],
  }

  const bgImage = {
    id: 'bgImage',
    beforeDatasetDraw(chart: ChartJS): boolean | void {
      const { ctx } = chart

      if (chart.getDatasetMeta(0).data[0]) {
        data.datasets[0].images.forEach((_: string, index: number) => {
          const xPos = chart.getDatasetMeta(0).data[index].x
          const yPos = chart.getDatasetMeta(0).data[index].y
          const chartImage = new Image()
          chartImage.src = data.datasets[0].images[index]

          ctx.drawImage(chartImage, xPos - 20, yPos - 50, 40, 40)
        })
      }
    },
  }

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
        grace: 0.3,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return <Bar data={data} options={options} plugins={[bgImage]} />
}

export default FindSimilarDogChart
