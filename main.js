/**
 * Created by cheewu on 2017/7/30.
 */


const fullScreen = () => {
    const canvas = document.querySelector('#id-canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

const enableDebug = (game) => {
    config.debug = true
    bindEvent(window, 'keydown', function (event) {
        if (event.key === 'p') {
            log(1)
            config.pause = !config.pause
        }
    })

    bindAll(document, '.clz-slider', 'input', (event) => {
        const target = event.target
        const val = target.dataset["value"]
        const sliderVal = target.value
        eval(`config.range.${val}.value=${sliderVal}`)
        target.closest('label').querySelector('.clz-range-text').innerText = sliderVal
    })
}

const generateConfigElement = () => {
    const range = config.range
    const configEle = Object.keys(range).map(k => {
        const c = range[k]
        const tpl = `
            <div>
                <label>
                    <input type="range" data-value=${k} min=${c.min} max=${c.max} value=${c.value} class="clz-slider">
                    ${c.text}：<span class="clz-range-text">${c.value}</span>
                </label>
            </div>
        `
        return tpl
    }).join('')
    const container = e(document, '.clz-config-container')
    container.insertAdjacentHTML('beforeend', configEle)
}

const __main = () => {
    new Game((g) => {
        generateConfigElement()

        enableDebug(g)

        const scene = new Scene(g)

        g.runWithScene(scene)

    })
}

__main()

