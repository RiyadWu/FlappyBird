/**
 * Created by cheewu on 2017/8/24.
 */
class MedalPad {
    constructor(game) {
        this.game = game
        this.pad = new GameImage(game, 'medalPad')
        this.score = new Score(game)
        this.highestScore = new Score(game)
        this.elements = []
        this.__setup()
    }

    __addElement(e) {
        this.elements.push(e)
    }

    __setup() {
        this.pad.x = 37
        this.pad.y = 150
        this.__addElement(this.pad)

        this.score.score = this.game.score
        this.score.x = 219
        this.score.y = 183
        this.__addElement(this.score)

        this.highestScore.score = this.game.highestScore
        this.highestScore.x = 219
        this.highestScore.y = 225
        this.__addElement(this.highestScore)

        const score = this.game.score
        if (score < config.medalLevel1 ) {
            this.medal = new GameImage(this.game, 'copper')
        } else if (config.medalLevel1 <= score && score < config.medalLevel2) {
            this.medal = new GameImage(this.game, 'sliver')
        } else if (config.medalLevel2 <= score) {
            this.medal = new GameImage(this.game, 'gold')
        }
        this.medal.x = 60
        this.medal.y = 190
        this.__addElement(this.medal)
    }


    update() {
      this.elements.forEach(e => e.update())
    }

    draw() {
        this.elements.forEach(e => e.draw())
    }
}