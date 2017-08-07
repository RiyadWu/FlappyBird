/**
 * Created by cheewu on 2017/8/7.
 */
class Bird extends GameAnimation {
    constructor(game, name, framesLength) {
        super(game, name, framesLength)
        this.gy = 10
        this.vy = 0
        this.speed = 12
        this.groundHeight = 504
    }

    update() {
        this.y += this.vy
        this.vy += this.gy / this.game.config.fps
        const gh = this.groundHeight
        if (this.y > gh) {
            this.y = gh
        }
        super.update()
    }

    fly() {
        this.vy = 0
        this.y -= this.speed
    }
}