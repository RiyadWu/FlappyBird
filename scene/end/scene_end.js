/**
 * Created by cheewu on 2017/8/22.
 */
class End extends BaseScene{
    constructor(game) {
        super(game)
        this.bg = new GameImage(game, 'background')
        this.ground = new Background(game, 'ground')
        this.startBtn = new GameImage(game, 'start')
        this.medalPad = new MedalPad(game)
        this.__setup()
    }

    __setup() {
        this.addElement(this.bg)
        this.addElement(this.ground)
        this.addElement(this.medalPad)

        this.startBtn.x = 110
        this.startBtn.y = 320
        this.addElement(this.startBtn)

        this.click = (e) => {
            const x = event.layerX
            const y = event.layerY
            const start = pInRect(x, y, this.startBtn)
            if (start) {
                const readyScene = new Ready(this.game)
                this.game.replaceScene(readyScene)
            }
            unbindEvent(this.game.canvas, 'click', this.click)
        }
        bindEvent(this.game.canvas, 'click', this.click)
    }

    draw() {
        super.draw()
    }

    update() {
        super.update()
    }
}
