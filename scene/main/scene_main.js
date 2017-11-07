class Scene extends BaseScene{
    constructor(game) {
        super(game)
        this.bg = new GameImage(game, 'background')
        this.ground = new Background(game, 'ground')
        this.bird = new Bird(game, 'bird', 3)
        this.pipes = new Pipes(game)
        this.score = new Score(game)
        this.__setup()
    }

    __setup() {
        this.addElement(this.bg)
        this.addElement(this.pipes)
        this.addElement(this.ground)
        this.addElement(this.bird)
        this.score.x = 150
        this.score.y = 180
        this.addElement(this.score)

        this.game.registerActions('w', () => {
            this.bird.fly()
        })
    }

    __checkCollision() {
        return this.pipes.checkCollision(this.bird) || this.bird.y === this.bird.minHeight || this.bird.y < 0
    }

    __updateScore() {
        this.pipes.updateScore(this.bird, this.score)
        this.game.updateScore(this.score.score)
    }

    draw() {
        super.draw()
    }

    update() {
        super.update()
        if (this.__checkCollision()) {
            this.game.pause()
            setTimeout(() => {
                const endScene = new End(this.game)
                this.game.replaceScene(endScene)
                this.game.start()
            }, 1200)

        }
        this.__updateScore()
    }

}
