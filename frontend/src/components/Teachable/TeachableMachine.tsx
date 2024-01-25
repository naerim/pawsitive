import * as tmImage from '@teachablemachine/image'

const TeachableMachine = () => {
  const URL = 'https://teachablemachine.withgoogle.com/models/KDq_2gk72/'

  let model
  let webcam
  let labelContainer
  let maxPredictions

  let isPredicting = false

  async function init() {
    if (isPredicting) {
      return // If already predicting, do nothing
    }

    isPredicting = true

    // Clear previous webcam instance if exists
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

    // Clear previous webcam container content
    document.getElementById('webcam-container').innerHTML = ''

    // Append new webcam canvas
    document.getElementById('webcam-container').appendChild(webcam.canvas)

    labelContainer = document.getElementById('label-container')
    for (let i = 0; i < maxPredictions; i++) {
      labelContainer.appendChild(document.createElement('div'))
    }
  }

  function stop() {
    if (webcam) {
      webcam.stop()
      isPredicting = false
    }
  }

  async function loop() {
    if (isPredicting) {
      webcam.update() / (await predict())
      window.requestAnimationFrame(loop)
    }
  }

  async function predict() {
    const prediction = await model.predict(webcam.canvas)
    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction = `${prediction[i].className}:  ${Math.round(
        prediction[i].probability * 100,
      )}%`
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

export default TeachableMachine

// import * as tmImage from '@teachablemachine/image'
//
// const TeachableMachine = () => {
//   const URL = 'https://teachablemachine.withgoogle.com/models/KDq_2gk72/'
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
//     webcam.update() / (await predict())
//     window.requestAnimationFrame(loop)
//   }
//
//   async function predict() {
//     const prediction = await model.predict(webcam.canvas)
//     for (let i = 0; i < maxPredictions; i++) {
//       console.log(prediction)
//       console.log(typeof prediction)
//       const classPrediction = `${prediction[i].className}:  ${Math.round(prediction[i].probability * 100)}%`
//       labelContainer.childNodes[i].innerHTML = classPrediction
//     }
//   }
//
//   return (
//     <div>
//       <div> Teachable Machine Image Model</div>
//       <button type="button" onClick={init}>
//         Start
//       </button>
//       <div id="webcam-container" />
//       <div id="label-container" />
//       {/* <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js" /> */}
//       {/* <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@latest/dist/teachablemachine-image.min.js" /> */}
//     </div>
//   )
// }
// export default TeachableMachine
