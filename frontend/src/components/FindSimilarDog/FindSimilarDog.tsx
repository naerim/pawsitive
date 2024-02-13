import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as tmImage from '@teachablemachine/image'
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
import * as f from '@src/components/style/FindSimilarDogStyle'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const FindSimilarDog = () => {
  const navigate = useNavigate()
  const URL = 'https://teachablemachine.withgoogle.com/models/EYgf6bU6pf/'

  let model: tmImage.CustomMobileNet | null = null
  let webcam: tmImage.Webcam | null = null
  let labelContainer: HTMLElement | null = null
  let maxPredictions: number | null = null

  const isPredictingRef = useRef<boolean>(false) // stop 기능을 추가하기 위해
  const [started, setStarted] = useState<boolean>(false) // start 전/후의 화면 구성을 위해

  const labels: string[] = ['말티즈', '비숑', '치와와', '푸들', '리트리버']
  const [chartData, setChartData] = useState<number[]>([])
  const [resultData, setResultData] = useState<
    { label: string; probability: number }[]
  >([])
  const [check, setCheck] = useState<boolean>(false)

  // 페이지 이동 버튼
  const goBack = () => navigate('/mypage')
  const handleNextButtonClick = () => {
    navigate('/mypage/findSimilarDog/result', { state: { resultData } })
  }

  console.log(resultData)
  console.log(chartData)

  async function predict() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const prediction = await model.predict(webcam.canvas)
    setChartData(prediction.map(item => item.probability))
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    for (let i = 0; i < maxPredictions; i += 1) {
      const classPrediction: string = prediction[i].className
      const probability: number = Math.round(prediction[i].probability * 100)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (labelContainer.childNodes[i] instanceof HTMLDivElement) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        labelContainer.childNodes[i].innerHTML =
          `<div>${classPrediction}</div><div>${probability}%</div>`
      }
    }
  }

  function stop() {
    isPredictingRef.current = false
    if (webcam) {
      webcam.stop()
      webcam = null
    }
    const updatedResultData = chartData.map((item, index) => ({
      label: labels[index],
      probability: Math.round(item * 100),
    }))
    setResultData(updatedResultData)
  }

  const onClickCamera = () => {
    stop()
    setCheck(true)
  }

  async function loop() {
    if (isPredictingRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      webcam.update()
      await predict()
      window.requestAnimationFrame(loop)
    }
  }

  async function init() {
    stop()
    const modelURL = `${URL}model.json`
    const metadataURL = `${URL}metadata.json`

    model = await tmImage.load(modelURL, metadataURL)
    maxPredictions = model.getTotalClasses()

    const flip = true
    webcam = new tmImage.Webcam(260, 260, flip)
    await webcam.setup()
    await webcam.play()
    isPredictingRef.current = true
    window.requestAnimationFrame(loop)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    document.getElementById('webcam-container').appendChild(webcam.canvas)
    labelContainer = document.getElementById('label-container')

    for (let i = 0; i < maxPredictions; i += 1) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      labelContainer.appendChild(document.createElement('div'))
    }
  }

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
        grace: '50%',
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <f.Container>
      <f.BackButtonWrap>
        <img src="/icon/icon_gray_arrow_left.png" alt="" onClick={goBack} />
      </f.BackButtonWrap>
      {started ? (
        <f.DoneWrap>
          <f.FixWrap>
            <f.WebcamContainer id="webcam-container" />
            <f.BarContainer>
              <Bar data={data} options={options} plugins={[bgImage]} />
            </f.BarContainer>
            <f.LabelContainer id="label-container" />
          </f.FixWrap>
          <f.ActionButtons>
            <f.CaptureButton onClick={onClickCamera}>촬영하기</f.CaptureButton>
            <f.NextButton onClick={handleNextButtonClick} disabled={!check}>
              결과화면보기
            </f.NextButton>
          </f.ActionButtons>
          <f.SmallDesc>*촬영하기 버튼을 먼저 눌러주세요!</f.SmallDesc>
        </f.DoneWrap>
      ) : (
        <f.PrevWrap>
          <f.PrevImg src="/img/img_main_house.png" alt="" />
          <f.PrevTitle>나와 가장 닮은 강아지는?</f.PrevTitle>
          <f.PrevDesc>얼굴로 보는 인공지능 강아지상 테스트</f.PrevDesc>
          <f.StartButton
            type="button"
            onClick={() => {
              setStarted(true)
              init()
            }}
          >
            시작하기
          </f.StartButton>
        </f.PrevWrap>
      )}
    </f.Container>
  )
}

export default FindSimilarDog
