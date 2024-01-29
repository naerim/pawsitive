// import * as tmImage from '@teachablemachine/image'
//
// const FindSimilarDog = () => {
//   const URL = 'https://teachablemachine.withgoogle.com/models/WEqtMay2T/'
//
//   let model
//   let webcam
//   let labelContainer
//   let maxPredictions
//
//   async function init() {
//     const modelURL = `${URL}model.json`
//     const metadataURL = `${URL}metadata.json`
//
//     model = await tmImage.load(modelURL, metadataURL)
//     maxPredictions = model.getTotalClasses()
//
//     const flip = true
//     webcam = new tmImage.Webcam(200, 200, flip)
//     await webcam.setup()
//     await webcam.play()
//     window.requestAnimationFrame(loop)
//
//     document.getElementById('webcam-container').appendChild(webcam.canvas)
//     labelContainer = document.getElementById('label-container')
//     for (let i = 0; i < maxPredictions; i++) {
//       labelContainer.appendChild(document.createElement('div'))
//     }
//   }
//
//   async function loop() {
//     webcam.update()
//     await predict()
//     window.requestAnimationFrame(loop)
//   }
//
//   async function predict() {
//     const prediction = await model.predict(webcam.canvas)
//     for (let i = 0; i < maxPredictions; i++) {
//       const classPrediction = `${prediction[i].className}: ${prediction[i].probability.toFixed(2)}`
//       labelContainer.childNodes[i].innerHTML = classPrediction
//     }
//   }
//
//   return (
//     <div>
//       <div>Teachable Machine Image Model</div>
//       <button type="button" onClick={init}>
//         Start
//       </button>
//       <div id="webcam-container" />
//       <div id="label-container" />
//     </div>
//   )
// }
//
// export default FindSimilarDog
//
// import * as tmImage from '@teachablemachine/image'
//
// const FindSimilarDog = () => {
//   const URL = 'https://teachablemachine.withgoogle.com/models/WEqtMay2T/'
//
//   let model
//   let webcam
//   let labelContainer
//   let maxPredictions
//
//   async function init() {
//     const modelURL = `${URL}model.json`
//     const metadataURL = `${URL}metadata.json`
//
//     // 이전 웹캠 인스턴스가 존재하면 제거
//     stop()
//
//     model = await tmImage.load(modelURL, metadataURL)
//     maxPredictions = model.getTotalClasses()
//
//     const flip = true
//     webcam = new tmImage.Webcam(200, 200, flip)
//     await webcam.setup()
//     await webcam.play()
//     window.requestAnimationFrame(loop)
//
//     // 이전 웹캠 캔버스를 지우고 새로운 웹캠 캔버스 추가
//     document.getElementById('webcam-container').innerHTML = ''
//     document.getElementById('webcam-container').appendChild(webcam.canvas)
//
//     labelContainer = document.getElementById('label-container')
//     for (let i = 0; i < maxPredictions; i++) {
//       labelContainer.appendChild(document.createElement('div'))
//     }
//   }
//
//   function stop() {
//     if (webcam) {
//       webcam.stop()
//     }
//   }
//
//   async function loop() {
//     webcam.update()
//     await predict()
//     window.requestAnimationFrame(loop)
//   }
//
//   async function predict() {
//     const prediction = await model.predict(webcam.canvas)
//     for (let i = 0; i < maxPredictions; i++) {
//       const classPrediction = `${prediction[i].className}: ${Math.round(prediction[i].probability * 100)}%`
//       labelContainer.childNodes[i].innerHTML = classPrediction
//     }
//   }
//
//   return (
//     <div>
//       <div>Teachable Machine Image Model</div>
//       <button type="button" onClick={init}>
//         Start
//       </button>
//       <button type="button" onClick={stop}>
//         Stop
//       </button>
//       <div id="webcam-container" />
//       <div id="label-container" />
//     </div>
//   )
// }
//
// export default FindSimilarDog

import * as tmImage from '@teachablemachine/image'

const FindSimilarDog = () => {
  const URL = 'https://teachablemachine.withgoogle.com/models/WEqtMay2T/'

  let model
  let webcam
  let labelContainer
  let maxPredictions

  let isPredicting = false

  async function init() {
    // 이전 웹캠 인스턴스가 존재하면 제거
    stop()

    const modelURL = `${URL}model.json`
    const metadataURL = `${URL}metadata.json`

    model = await tmImage.load(modelURL, metadataURL)
    maxPredictions = model.getTotalClasses()

    const flip = true
    webcam = new tmImage.Webcam(200, 200, flip)
    await webcam.setup()
    await webcam.play()
    window.requestAnimationFrame(loop)

    // 이전 웹캠 캔버스를 지우고 새로운 웹캠 캔버스 추가
    document.getElementById('webcam-container').innerHTML = ''
    document.getElementById('webcam-container').appendChild(webcam.canvas)

    labelContainer = document.getElementById('label-container')
    for (let i = 0; i < maxPredictions; i++) {
      labelContainer.appendChild(document.createElement('div'))
    }

    isPredicting = true
  }

  function stop() {
    if (webcam) {
      webcam.stop()
      isPredicting = false
    }
  }

  async function loop() {
    if (isPredicting) {
      webcam.update()
      await predict()
      window.requestAnimationFrame(loop)
    }
  }

  async function predict() {
    const prediction = await model.predict(webcam.canvas)
    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction = `${prediction[i].className}: ${Math.round(prediction[i].probability * 100)}%`
      labelContainer.childNodes[i].innerHTML = classPrediction
    }
  }

  return (
    <div>
      <div>Teachable Machine Image Model</div>
      <button type="button" onClick={init}>
        Start
      </button>
      <button type="button" onClick={stop}>
        Stop
      </button>
      <div id="webcam-container" />
      <div id="label-container" />
    </div>
  )
}

export default FindSimilarDog
