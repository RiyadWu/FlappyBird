class Pipes {
    constructor(game) {
        this.game = game
        this.pipes = []
        this.__setup()
    }

    __setup() {
        for (let i = 0; i < config.range.pipeNum.value; i++) {
            const x = 300 + i *  config.range.horizontalSpacing.value
            const pairPipe = new PairPipes(this.game, x)
            this.pipes.push(pairPipe)
        }
    }

    update() {
        for (let p of this.pipes) {
            p.update()
            if (!p.alive) {
                p.alive = true
                p.x = this.__tailX() + config.range.horizontalSpacing.value
                p.scored = false
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

    checkCollision(bird) {
        for (let pipe of this.pipes) {
            if (pipe.checkCollision(bird)) {
                return true
            }
        }
        return false
    }

    updateScore(bird, score) {
        for (let pipe of this.pipes) {
            if (!pipe.scored && pipe.x + pipe.w < bird.x) {
                score.score++
                pipe.scored = true
            }
        }
    }

    draw() {
        for (let p of this.pipes) {
            p.draw()
        }
    }
}