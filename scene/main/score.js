/**
 * Created by cheewu on 2017/8/22.
 */
class Score  {
    constructor(game) {
        this.game = game
        this.score = 0
        this.fontWidth = 20
        this.__setup()
    }

    __setup() {
        this.__translateScore()
    }

    __newNumber (number) {
        return new GameImage(this.game, 'number' + number)
    }

    __translateScore() {
        this.element = []
        const scoreArr = String(this.score).split('')

        scoreArr.forEach(s => {
            this.element.push(this.__newNumber(s))
        })
    }

    update() {
        this.__translateScore()
        this.__updatePosition()
    }

    __updatePosition() {
        const scoreStr = String(this.score)
        const len = scoreStr.length
        const index = len / 2
        for (let i = 0; i < len; i++) {
            const element = this.element[i]
            element.x =  (i - index) * this.fontWidth + this.x
            element.y =  this.y
        }
    }

    draw() {
        this.element.forEach(e => e.draw())
    }

}