class Pipes {
    constructor(game) {
        this.game = game
        this.pipes = []
        this.pipeNum = 5
        this.horizontalSpacing = 200
        this.verticalSpacing = 100
        this.speed = 4
        this.rotation = 0
        this.removedNum = 0
        this.__setup()
    }

    __setup() {
        for (let i = 0; i < this.pipeNum; i++) {
            this.addPair(i)
        }
    }

    resetPosition(pipeAbove, pipeBelow) {
        pipeAbove.y = randomNum(-200, 0)
        pipeBelow.y = pipeAbove.y + pipeAbove.h + this.verticalSpacing
    }

    remove(p) {
        const index = this.pipes.indexOf(p)
        this.pipes.splice(index, 1)
        this.removedNum++
    }

    addPair(index = 1) {
        const p1 = new GameImage(this.game, 'pipe')
        p1.x = 300 + index * this.horizontalSpacing
        p1.rotation = 180
        const p2 = new GameImage(this.game, 'pipe')

        p2.x = p1.x
        this.resetPosition(p1, p2)
        this.pipes.push(p1)
        this.pipes.push(p2)
    }

    update() {
        for (let p of this.pipes) {
            p.x -= this.speed
            if (p.x < -p.w - this.horizontalSpacing - p.w) {
                this.remove(p)
                if (this.removedNum === 2) {
                    this.addPair(2)
                    this.removedNum = 0
                }
            }
        }
    }

    draw() {
        const context = this.game.context
        for (let p of this.pipes) {
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