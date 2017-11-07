/**
 * Created by cheewu on 2017/8/22.
 */
class Title extends BaseScene{
    constructor(game) {
        super(game)
        this.bg = new GameImage(game, 'background')
        this.ground = new Background(game, 'ground')
        this.startBtn = new GameImage(game, 'start')
        this.name = new GameImage(game, 'gameName')
        this.__setup()
    }

    __setup() {
        this.addElement(this.bg)
        this.addElement(this.ground)

        this.name.x = 50
        this.name.y = 200
        this.addElement(this.name)

        this.startBtn.x = 100
        this.startBtn.y = 300
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
