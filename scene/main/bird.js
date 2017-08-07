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
        this.rotation = 0
        this.alpha = 1
    }

    update() {
        this.y += this.vy
        this.vy += this.gy / this.game.config.fps
        const gh = this.groundHeight
        if (this.y > gh) {
            this.y = gh
        }
        this.rotation += 5
        if (this.rotation > 45) {
            this.rotation = 45
        }

        if (this.alpha > 0) {
            this.alpha -= 0.05
        }
        super.update()
    }

    draw() {
        const context = this.game.context
        context.save()

        const w1 = this.w / 2
        const h1 = this.h / 2
        const w2 = this.x + this.w / 2
        const h2 = this.y + this.h / 2

        context.translate(w2, h2)
        context.globalAlpha = this.alpha
        context.rotate(this.rotation * Math.PI / 180 )

        context.translate(-w1, -h1)
        context.drawImage(this.texture, 0, 0)

        context.restore()
    }

    fly() {
        this.alpha = 1
        this.rotation = -45
        this.vy = 0
        this.y -= this.speed
    }
}