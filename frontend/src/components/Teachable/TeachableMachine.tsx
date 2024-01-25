import * as tmImage from '@teachablemachine/image'

const TeachableMachine = () => {
  const URL = 'https://teachablemachine.withgoogle.com/models/KDq_2gk72/'

  let model
  let webcam
  let labelContainer
  let maxPredictions

  async function init() {
    const modelURL = `${URL}model.json`
    const metadataURL = `${URL}metadata.json`

    model = await tmImage.load(modelURL, metadataURL)
    maxPredictions = model.getTotalClasses()

    const flip = true
    webcam = new tmImage.Webcam(200, 200, flip)
    await webcam.setup()
    await webcam.play()
    window.requestAnimationFrame(loop)

    document.getElementById('webcam-container').appendChild(webcam.canvas)
    labelContainer = document.getElementById('label-container')
    for (let i = 0; i < maxPredictions; i++) {
      labelContainer.appendChild(document.createElement('div'))
    }
  }

  async function loop() {
    webcam.update() / (await predict())
    window.requestAnimationFrame(loop)
  }

  async function predict() {
    const prediction = await model.predict(webcam.canvas)
    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction = `${prediction[i].className}: ${prediction[i].probability.toFixed(2)}`
      labelContainer.childNodes[i].innerHTML = classPrediction
    }
  }

  return (
    <div>
      <div> Teachable Machine Image Model</div>
      <button type="button" onClick={init}>
        Start
      </button>
      <div id="webcam-container" />
      <div id="label-container" />
      {/* <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js" /> */}
      {/* <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@latest/dist/teachablemachine-image.min.js" /> */}
    </div>
  )
}
export default TeachableMachine
