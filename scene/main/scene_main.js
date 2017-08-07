class Scene extends BaseScene{
    constructor(game) {
        super(game)
        this.bg = new GameImage(game, 'background')
        this.ground = new Background(game, 'ground')
        this.bird = new Bird(game, 'bird', 3)
        this.__setup()
    }

    __setup() {
        this.addElement(this.bg)
        this.addElement(this.ground)
        this.bird.x = 200
        this.bird.y = 100
        this.addElement(this.bird)

        this.game.registerActions('w', () => {
            this.bird.fly()
        })
    }

    draw() {
        super.draw()
    }

    update() {
        super.update()
    }

}