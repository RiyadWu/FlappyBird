/**
 * Created by cheewu on 2017/8/22.
 */
class Ready extends BaseScene{
    constructor(game) {
        super(game)
        this.bg = new GameImage(game, 'background')
        this.ground = new Background(game, 'ground')
        this.bird = new Bird(game, 'bird', 3)
        this.ready = new GameImage(game, 'ready')
        this.__setup()
    }

    __setup() {

        this.addElement(this.bg)
        this.addElement(this.ground)

        this.bird.gy = 0
        this.bird.rotationChange = 0
        this.addElement(this.bird)

        this.ready.x = 50
        this.ready.y  = 150
        this.addElement(this.ready)

        setTimeout(() => {
            this.__removeReady()
            setTimeout(() => {
                const scene = new Scene(this.game)
                this.game.replaceScene(scene)
            }, 2000)
        }, 1000)

    }

    __removeReady() {
        this.elements = this.elements.filter(e => e !== this.ready)
    }

    draw() {
        super.draw()
    }

    update() {
        super.update()
    }
}
