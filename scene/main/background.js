/**
 * Created by cheewu on 2017/8/6.
 */
class Background {
    constructor(game, name) {
        this.game = game
        this.left = new GameImage(game, name)
        this.middle = new GameImage(game, name)
        this.right = new GameImage(game, name)
        this.__setup()
    }

    __setup() {
        const y = 504
        this.left.y = y
        this.middle.y = y
        this.right.y = y
        this.__connectImg()
    }

    __connectImg() {
        this.left.x = this.middle.x - this.middle.w + 1
        this.right.x = this.middle.x + this.middle.w - 1
    }

    update() {
        this.middle.x -= this.game.config.backgroundSpeed
        if (this.middle.x <= -this.middle.w) {
            this.middle.x = 0
        }
        this.__connectImg()
    }

    draw() {
        this.game.drawImage(this.left)
        this.game.drawImage(this.middle)
        this.game.drawImage(this.right)
    }
}
