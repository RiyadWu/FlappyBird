class Pipes {
    constructor(game) {
        this.game = game
        this.pipes = []
        this.__setup()
    }

    __setup() {
        for (let i = 0; i < config.range.pipeNum.value; i++) {
            const pairPipe = new PairPipes(this.game)
            pairPipe.x = 300 + i *  config.range.horizontalSpacing.value
            this.pipes.push(pairPipe)
        }
    }

    update() {
        for (let p of this.pipes) {
            p.update()
            if (!p.alive) {
                p.alive = true
                p.x = this.__tailX() + config.range.horizontalSpacing.value
            }
        }

        this.__syncPipeNum()
    }

    __syncPipeNum() {
        while(this.pipes.length < config.range.pipeNum.value) {
            const p = new PairPipes(this.game)
            p.x = this.__tailX() + config.range.horizontalSpacing.value
            this.pipes.push(p)
        }
    }

    __tailX() {
        return this.pipes.map(p => p.x).sort((a, b) => a - b).pop()
    }

    draw() {
        for (let p of this.pipes) {
            p.draw()
        }
    }
}