export default class Controller {
  #view
  #camera
  #worker
  #blinkCounter = 0
  #leftBlinkCounter = 0
  #rightBlinkCounter = 0
  constructor({ view, worker, camera }) {
    this.#view = view
    this.#camera = camera
    this.#worker = this.#configureWorker(worker)

    this.#view.configureOnBtnClick(this.onBtnStart.bind(this))
  }

  static async initialize(deps) {
    const controller = new Controller(deps)
    controller.log('not yet detecting eye blink! click in the button to start')
    return controller.init()
  }

  #configureWorker(worker) {
    let ready = false
    worker.onmessage = ({ data }) => {
      if ('READY' === data) {
        console.log('worker is ready!')
        this.#view.enableButton()
        ready = true
        return
      }

      const blinked = data.blinked
      console.log('blinked ', blinked)

      switch (blinked) {
        case 'LEFT':
          this.#view.backwardVideo()
          this.#leftBlinkCounter++
          break

        case 'RIGHT':
          this.#view.forwardVideo()
          this.#rightBlinkCounter++
          break

        default:
          this.#view.togglePlayVideo()
        }

        this.#blinkCounter++
    }

    return {
      send(msg) {
        if (!ready) return
        worker.postMessage(msg)
      }
    }
  }
  async init() {
    console.log('init!!')
  }

  loop() {
    const video = this.#camera.video
    const img = this.#view.getVideoFrame(video)
    this.#worker.send(img)
    this.log(`detecting eye blink...`)

    setTimeout(() => this.loop(), 100)
  }
  log(text) {
    const counter = `      - blinked times: ${this.#blinkCounter}`
    const leftCounter = `      - left blinks: ${this.#leftBlinkCounter}`
    const rightBlinkCounter = `      - right blinks: ${this.#rightBlinkCounter}`
    this.#view.log(`status: ${text}`
      .concat(this.#blinkCounter ? counter : "")
      .concat(this.#blinkCounter ? leftCounter : "")
      .concat(this.#blinkCounter ? rightBlinkCounter : "")
    )
  }

  onBtnStart() {
    this.log('initializing detection...')
    this.#blinkCounter = 0
    this.loop()
  }
}
