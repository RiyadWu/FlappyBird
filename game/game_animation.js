class GameAnimation {
    constructor(game, name, frameLength) {
        this.game = game
        this.name  = name
        this.frameLength = frameLength
        this.frames = []

        this.__setUp()
    }

    __setUp() {
        const len = this.frameLength
        const game = this.game
        for (let i = 1; i <= len; i++) {
            const name =  `${this.name}${i}`
            const img = game.imageByName(name)
            this.frames.push(img)
        }

        this.texture = this.frames[0]
        this.frameIndex = 0
        this.frameCount = 3
        this.w = this.texture.width
        this.h = this.texture.height
    }

    update() {
        this.frameCount--
        if (this.frameCount === 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames.length
            this.texture = this.frames[this.frameIndex]
        }
    }

    draw() {
        this.game.context.drawImage(this.texture, this.x, this.y)
    }
}