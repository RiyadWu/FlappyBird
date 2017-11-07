class Game {
    constructor(callback) {
        this.callback = callback
        this.scene = null
        this.actions = {}
        this.keysDowns = {}
        this.images = {
            bird1: 'img/bird1.png',
            bird2: 'img/bird2.png',
            bird3: 'img/bird3.png',
            ground: 'img/ground.png',
            pipe: 'img/pipe.png',
            background: 'img/bg.png',
            number0: 'img/number/0.png',
            number1: 'img/number/1.png',
            number2: 'img/number/2.png',
            number3: 'img/number/3.png',
            number4: 'img/number/4.png',
            number5: 'img/number/5.png',
            number6: 'img/number/6.png',
            number7: 'img/number/7.png',
            number8: 'img/number/8.png',
            number9: 'img/number/9.png',
            start: 'img/birdUI/start.png',
            gameName: 'img/birdUI/name.png',
            gold: 'img/birdUI/gold.png',
            sliver: 'img/birdUI/sliver.png',
            copper: 'img/birdUI/copper.png',
            medalPad: 'img/birdUI/medal_pad.png',
            gameOver: 'img/birdUI/game_over.png',
            ready: 'img/birdUI/get_ready.png',
        }
        this.score = 0
        this.highestScore = Number(localStorage['highestScore']) || 0
        this.__setup()
    }

    __setup() {
        const canvas = e(document, '#id-canvas')
        this.canvas = canvas
        this.context = canvas.getContext('2d')

        bindEvent(window, 'keydown', (event) => {
            this.keysDowns[event.key] = true
        })

        bindEvent(window, 'keyup', (event) => {
            this.keysDowns[event.key] = false
        })

        this.__loadAllImg()
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    updateScore(score) {
        this.score = score
        if (this.score > this.highestScore) {
            this.highestScore = this.score
            localStorage['highestScore'] = this.highestScore
        }
    }
    pause() {
        config.pause = true
    }

    start() {
        config.pause = false
    }



    update() {
        if  (!config.pause) {
            this.scene.update()
        }
    }

    draw() {
        this.scene.draw()
    }

    drawImage(image) {
        this.context.drawImage(image.texture, image.x, image.y)
    }

    imageByName(name) {
        return this.images[name]
    }

    registerActions(key, action) {
        this.actions[key] = action
    }

    replaceScene(scene) {
        if (this.scene) {
            this.scene.destroy()
        }
        this.scene = scene
    }

    runWithScene(scene) {
        this.replaceScene(scene)
        setTimeout(() => {
            this.runLoop()
        }, 1000 / config.range.fps.value)
    }

    runLoop() {
        // events
        Object.keys(this.actions).forEach(k => {
            if (this.keysDowns[k]) {
                this.actions[k]()
            }
        })
        this.update()
        // clear
        this.clear()
        // draw
        this.draw()

        setTimeout(() => {
            this.runLoop()
        }, 1000 / config.range.fps.value)
    }

    run() {
        this.callback(this)
    }

    __loadAllImg() {
        let successNum = 0
        const images = this.images
        const names = Object.keys(images)
        names.forEach(k => {
            let path = images[k]
            const img = new Image()
            img.src = path
            img.onload = () => {
                this.images[k] = img
                successNum++
                if (successNum === names.length) {
                    this.run()
                }
            }
        })
    }
}