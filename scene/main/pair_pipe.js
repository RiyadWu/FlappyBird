class PairPipes {
    constructor(game) {
        this.game = game
        this.rotation = 0
        this.alive = true
        this.__setup()
    }

    __setup() {
        const p1 = new GameImage(this.game, 'pipe')
        p1.x = this.x
        p1.rotation = 180
        const p2 = new GameImage(this.game, 'pipe')
        p2.x = this.x
        this.resetPosition(p1, p2)
        this.pipeAbove = p1
        this.pipeBelow = p2

    }

    resetPosition(pipeAbove, pipeBelow) {
        pipeAbove.y = randomNum(-200, 0)
        pipeBelow.y = pipeAbove.y + pipeAbove.h + config.range.verticalSpacing.value
    }

    setXPosition() {
        this.pipeAbove.x = this.x
        this.pipeBelow.x = this.x
    }

    die() {
        this.alive = false
    }


    update() {
        this.x -= config.range.backgroundSpeed.value
        this.setXPosition()
        if (this.x < -this.pipeAbove.w) {
            this.die()
        }
    }

    draw() {
        const context = this.game.context
        const pipes = [this.pipeAbove, this.pipeBelow]
        for (let p of pipes) {
            context.save()

            const w1 = p.w / 2
            const h1 = p.h / 2
            const w2 = p.x + p.w / 2
            const h2 = p.y + p.h / 2

            context.translate(w2, h2)
            context.rotate(p.rotation * Math.PI / 180 )

            context.translate(-w1, -h1)
            context.drawImage(p.texture, 0, 0)

            context.restore()
        }
    }
}